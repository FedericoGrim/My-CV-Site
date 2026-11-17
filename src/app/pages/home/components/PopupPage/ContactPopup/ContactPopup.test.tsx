import { act, render, screen } from "@testing-library/react";
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

    await user.hover(screen.getByRole("link", { name: "Telegram" }));

    expect(screen.getByRole("link", { name: /open chat/i })).toHaveAttribute("href", "https://t.me/FedeGrim");
  });
});

describe("ContactPopup phone entry", () => {
  it("never links to a phone app", async () => {
    const { user } = renderPopup();

    await user.click(screen.getByRole("link", { name: "Phone" }));

    expect(document.querySelector('a[href^="tel:"]')).toBeNull();
    expect(screen.getByText("+39 348 342 3417")).toBeInTheDocument();
  });

  it("copies the number to the clipboard and confirms it", async () => {
    const { user } = renderPopup();
    await user.hover(screen.getByRole("link", { name: "Phone" }));

    await user.click(screen.getByRole("button", { name: /copy number/i }));

    expect(await navigator.clipboard.readText()).toBe("+39 348 342 3417");
    expect(screen.getByRole("button", { name: /copied/i })).toBeInTheDocument();
  });

  it("goes back to the copy label after a moment", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<ContactPopup onClose={vi.fn()} />);
    await user.hover(screen.getByRole("link", { name: "Phone" }));
    await user.click(screen.getByRole("button", { name: /copy number/i }));

    await act(async () => {
      vi.advanceTimersByTime(2500);
    });

    expect(screen.getByRole("button", { name: /copy number/i })).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("tells the visitor when the number could not be copied", async () => {
    const { user } = renderPopup();
    vi.spyOn(navigator.clipboard, "writeText").mockRejectedValue(new Error("denied"));
    await user.hover(screen.getByRole("link", { name: "Phone" }));

    await user.click(screen.getByRole("button", { name: /copy number/i }));

    expect(await screen.findByRole("button", { name: /copy failed/i })).toBeInTheDocument();
  });
});
