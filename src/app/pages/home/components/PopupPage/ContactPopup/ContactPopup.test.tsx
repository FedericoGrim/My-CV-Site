import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ContactPopup } from "./ContactPopup";

vi.mock("next/font/google", () => ({
  Share_Tech_Mono: () => ({ className: "mock-font" }),
}));

function renderPopup() {
  const user = userEvent.setup();
  render(<ContactPopup onClose={vi.fn()} />);
  return { user };
}

describe("ContactPopup email entry", () => {
  it("opens the contact form from the compose button instead of leaving for a mail app", async () => {
    const { user } = renderPopup();

    await user.click(screen.getByRole("button", { name: /compose message/i }));

    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /compose message/i })).not.toBeInTheDocument();
  });

  it("opens the contact form when the email entry in the list is clicked", async () => {
    const { user } = renderPopup();

    await user.click(screen.getByRole("link", { name: "Email" }));

    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
  });

  it("keeps the form open while the pointer moves over other entries", async () => {
    const { user } = renderPopup();
    await user.click(screen.getByRole("button", { name: /compose message/i }));
    await user.type(screen.getByLabelText(/subject/i), "Job offer");

    await user.hover(screen.getByRole("link", { name: "Phone" }));

    expect(screen.getByLabelText(/subject/i)).toHaveValue("Job offer");
  });

  it("goes back to the entry details when the form is cancelled", async () => {
    const { user } = renderPopup();
    await user.click(screen.getByRole("button", { name: /compose message/i }));

    await user.click(screen.getByRole("button", { name: /cancel/i }));

    expect(screen.getByRole("button", { name: /compose message/i })).toBeInTheDocument();
    expect(screen.queryByLabelText(/your email/i)).not.toBeInTheDocument();
  });

  it("keeps plain links for the other entries", async () => {
    const { user } = renderPopup();

    await user.hover(screen.getByRole("link", { name: "Phone" }));

    expect(screen.getByRole("link", { name: /start call/i })).toHaveAttribute("href", "tel:+393483423417");
  });
});
