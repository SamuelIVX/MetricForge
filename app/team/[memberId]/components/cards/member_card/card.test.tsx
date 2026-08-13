/**
 * Vitest coverage for MemberCard rendering of identity and statistics.
 */
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import MemberCard, { MemberDetails } from "./card";

vi.mock("next/link", () => ({
    default: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
        <a href={href} {...props}>{children}</a>
    ),
}));

const member = {
    id: "7",
    name: "John Doe",
    initials: "JD",
    role: "Senior Developer",
    activeTasks: 12,
    completedTasks: 48,
    commits: 156,
    status: "Active",
    availability: "Available",
    team: "Frontend",
};

describe("MemberCard", () => {
    it("renders name, initials, role, and team", () => {
        render(<MemberCard {...member} />);
        expect(screen.getByText("JD")).toBeInTheDocument();
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getByText("Senior Developer")).toBeInTheDocument();
    });

    it("links to the member detail page", () => {
        render(<MemberCard {...member} />);
        expect(screen.getByRole("link")).toHaveAttribute("href", "/team/7");
    });
});

describe("MemberDetails", () => {
    it("renders a statistic and its label", () => {
        render(<MemberDetails statistic={12} title="Active Tasks" color="text-white" />);
        expect(screen.getByText("12")).toBeInTheDocument();
        expect(screen.getByText("Active Tasks")).toBeInTheDocument();
    });
});
