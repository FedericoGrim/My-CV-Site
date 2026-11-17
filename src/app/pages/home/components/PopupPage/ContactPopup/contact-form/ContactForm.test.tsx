import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ContactForm } from "./ContactForm";
import type { SendContactMessageResult } from "./send-contact-message";

function renderForm(overrides: Partial<React.ComponentProps<typeof ContactForm>> = {}) {
  const sendMessage = vi.fn<(message: unknown) => Promise<SendContactMessageResult>>().mockResolvedValue({
    status: "sent",
  });
  const onCancel = vi.fn();
  const user = userEvent.setup();
  render(<ContactForm sendMessage={sendMessage} onCancel={onCancel} {...overrides} />);
  return { user, sendMessage, onCancel };
}

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/your email/i), "jane@example.com");
  await user.type(screen.getByLabelText(/subject/i), "Job offer");
  await user.type(screen.getByLabelText(/^message/i), "Hello Federico");
}

describe("ContactForm", () => {
  it("renders the labelled fields and the send button", () => {
    renderForm();

    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^message/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/links to files/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("shows the validation errors and sends nothing when the form is invalid", async () => {
    const { user, sendMessage } = renderForm();

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByLabelText(/your email/i)).toBeInvalid();
    expect(screen.getByLabelText(/subject/i)).toBeInvalid();
    expect(screen.getByLabelText(/^message/i)).toBeInvalid();
    expect(sendMessage).not.toHaveBeenCalled();
  });

  it("sends the trimmed values together with the parsed links", async () => {
    const { user, sendMessage } = renderForm();
    await user.type(screen.getByLabelText(/your email/i), "  jane@example.com ");
    await user.type(screen.getByLabelText(/subject/i), "Job offer");
    await user.type(screen.getByLabelText(/^message/i), "Hello Federico");
    await user.type(screen.getByLabelText(/links to files/i), "https://example.com/cv.pdf");

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(sendMessage).toHaveBeenCalledWith({
      senderEmail: "jane@example.com",
      subject: "Job offer",
      message: "Hello Federico",
      linkUrls: ["https://example.com/cv.pdf"],
    });
  });

  it("disables the send button while the message is being sent", async () => {
    let finishSending: (result: SendContactMessageResult) => void = () => {};
    const sendMessage = vi.fn().mockReturnValue(new Promise((resolve) => (finishSending = resolve)));
    const { user } = renderForm({ sendMessage });
    await fillValidForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByRole("button", { name: /sending/i })).toBeDisabled();
    finishSending({ status: "sent" });
    expect(await screen.findByText(/message sent/i)).toBeInTheDocument();
  });

  it("confirms the delivery after a successful send", async () => {
    const { user } = renderForm();
    await fillValidForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText(/message sent/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/your email/i)).not.toBeInTheDocument();
  });

  it("keeps the typed values and offers a mail app fallback when sending fails", async () => {
    const sendMessage = vi.fn().mockResolvedValue({ status: "failed", reason: "network" });
    const { user } = renderForm({ sendMessage });
    await fillValidForm(user);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/could not be sent/i);
    expect(screen.getByLabelText(/^message/i)).toHaveValue("Hello Federico");
    expect(screen.getByRole("link", { name: /mail app/i })).toHaveAttribute(
      "href",
      expect.stringMatching(/^mailto:federico\.grimaldi2006@gmail\.com\?subject=Job%20offer&body=Hello%20Federico/),
    );
    expect(screen.getByRole("button", { name: /send message/i })).toBeEnabled();
  });

  it("pretends to succeed without sending when the hidden trap field is filled", async () => {
    const { user, sendMessage } = renderForm();
    await fillValidForm(user);
    const trap = document.querySelector<HTMLInputElement>('input[name="website"]');
    await user.type(trap!, "http://spam.example");

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText(/message sent/i)).toBeInTheDocument();
    expect(sendMessage).not.toHaveBeenCalled();
  });

  it("calls onCancel when the cancel button is pressed", async () => {
    const { user, onCancel } = renderForm();

    await user.click(screen.getByRole("button", { name: /cancel/i }));

    expect(onCancel).toHaveBeenCalledOnce();
  });
});
