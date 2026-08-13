/**
 * Vitest coverage for TaskTable rendering, selection, and toolbar behavior.
 */
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskTable } from "./table";
import { columns } from "./columns";
import type { TaskDetails } from "./types";

vi.mock("@/app/components/cards/taskSummaryCard/card", () => ({
    default: () => null,
    SummaryCard: () => null,
}));

vi.mock("@/app/components/charts/taskTableCharts/taskInsights", () => ({
    default: () => null,
}));

const data: TaskDetails[] = [
    {
        taskId: "TASK-002",
        title: "Task 2",
        status: "Done",
        priority: "Medium",
        confidenceRate: "88%",
        reviewer: "Jane Smith",
    },
    {
        taskId: "TASK-001",
        title: "Task 1",
        status: "Pending",
        priority: "High",
        confidenceRate: "95%",
        reviewer: "John Doe",
    },
    {
        taskId: "TASK-003",
        title: "Task 3",
        status: "Ignored",
        priority: "Low",
        confidenceRate: "76%",
        reviewer: "John Doe",
    },
];

function renderTable(overrides: Partial<{ meta: { updateData: (taskId: string, reviewer: string) => void } }> = {}) {
    return render(
        <TaskTable
            columns={columns}
            data={data}
            meta={overrides.meta ?? { updateData: vi.fn() }}
        />
    );
}

describe("TaskTable", () => {
    it("renders all rows with task IDs, titles, statuses and priorities", () => {
        renderTable();
        expect(screen.getByText("TASK-001")).toBeInTheDocument();
        expect(screen.getByText("TASK-002")).toBeInTheDocument();
        expect(screen.getByText("TASK-003")).toBeInTheDocument();
        expect(screen.getByText("Task 1")).toBeInTheDocument();
        expect(screen.getByText("Pending")).toBeInTheDocument();
        expect(screen.getByText("High")).toBeInTheDocument();
        expect(screen.getByText("88%")).toBeInTheDocument();
    });

    it("filters rows by title", () => {
        renderTable();
        fireEvent.change(screen.getByPlaceholderText("Filter tasks..."), {
            target: { value: "Task 2" },
        });
        expect(screen.getByText("TASK-002")).toBeInTheDocument();
        expect(screen.queryByText("TASK-001")).not.toBeInTheDocument();
        expect(screen.queryByText("TASK-003")).not.toBeInTheDocument();
    });

    it("shows the no-results row when the filter matches nothing", () => {
        renderTable();
        fireEvent.change(screen.getByPlaceholderText("Filter tasks..."), {
            target: { value: "zzz" },
        });
        expect(screen.getByText("No results.")).toBeInTheDocument();
    });

    it("sorts by task ID when the header is clicked", () => {
        renderTable();
        fireEvent.click(screen.getByRole("button", { name: /Task ID/ }));
        const cells = screen.getAllByText(/TASK-/);
        expect(cells[0].textContent).toBe("TASK-001");
        expect(cells[1].textContent).toBe("TASK-002");
        expect(cells[2].textContent).toBe("TASK-003");
    });

    it("paginates when there are more rows than fit on a page", () => {
        const many = Array.from({ length: 12 }, (_, i) => ({
            taskId: `TASK-${String(i + 1).padStart(3, "0")}`,
            title: `Task ${i + 1}`,
            status: "Pending",
            priority: "Medium",
            confidenceRate: "80%",
            reviewer: "John Doe",
        })) as TaskDetails[];

        render(
            <TaskTable columns={columns} data={many} meta={{ updateData: vi.fn() }} />
        );

        expect(screen.getByText("TASK-001")).toBeInTheDocument();
        expect(screen.queryByText("TASK-011")).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", { name: "Next" }));
        expect(screen.getByText("TASK-011")).toBeInTheDocument();
        expect(screen.queryByText("TASK-001")).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", { name: "Previous" }));
        expect(screen.getByText("TASK-001")).toBeInTheDocument();
    });

    it("updates a reviewer through the meta callback", () => {
        const updateData = vi.fn();
        renderTable({ meta: { updateData } });

        const reviewerSelect = screen.getAllByRole("combobox")[0];
        fireEvent.click(reviewerSelect);
        fireEvent.click(screen.getByRole("option", { name: "Alice Johnson" }));

        expect(updateData).toHaveBeenCalledWith("TASK-002", "Alice Johnson");
    });
});
