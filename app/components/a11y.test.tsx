import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import axe from "axe-core";
import { TaskTable } from "@/app/components/tables/task_table/table";
import { columns } from "@/app/components/tables/task_table/columns";
import MemberCard from "@/app/team/[memberId]/components/cards/member_card/card";
import type { TaskDetails } from "@/app/components/tables/task_table/types";

vi.mock("next/link", () => ({
    default: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
        <a href={href} {...props}>{children}</a>
    ),
}));

vi.mock("@/app/components/cards/taskSummaryCard/card", () => ({
    default: () => null,
    SummaryCard: () => null,
}));

vi.mock("@/app/components/charts/taskTableCharts/taskInsights", () => ({
    default: () => null,
}));

const tasks: TaskDetails[] = [
    {
        taskId: "TASK-001",
        title: "Task 1",
        status: "Pending",
        priority: "High",
        confidenceRate: "95%",
        reviewer: "John Doe",
    },
    {
        taskId: "TASK-002",
        title: "Task 2",
        status: "Done",
        priority: "Medium",
        confidenceRate: "88%",
        reviewer: "Jane Smith",
    },
];

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

async function seriousViolations(container: HTMLElement) {
    const results = await axe.run(container, {
        rules: {
            "color-contrast": { enabled: false },
        },
    });
    return results.violations.filter((v) => v.impact === "critical" || v.impact === "serious");
}

describe("a11y", () => {
    it("task table has no critical or serious axe violations", async () => {
        const { container } = render(
            <TaskTable columns={columns} data={tasks} meta={{ updateData: vi.fn() }} />
        );
        expect(await seriousViolations(container)).toEqual([]);
    });

    it("member card has no critical or serious axe violations", async () => {
        const { container } = render(<MemberCard {...member} />);
        expect(await seriousViolations(container)).toEqual([]);
    });
});
