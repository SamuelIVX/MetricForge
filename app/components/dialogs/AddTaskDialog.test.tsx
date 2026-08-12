import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AddTaskDialog } from "./AddTaskDialog";

function textboxes() {
    return screen.getAllByRole("textbox") as HTMLInputElement[];
}

describe("AddTaskDialog", () => {
    beforeEach(() => {
        vi.stubGlobal("crypto", {
            ...crypto,
            randomUUID: () => "test-uuid-123",
        });
    });

    it("submits a new task with generated id and form values", () => {
        const onAdd = vi.fn();
        render(<AddTaskDialog onAdd={onAdd} />);

        fireEvent.click(screen.getByRole("button", { name: /Add Task/ }));

        const [title, confidence, reviewer] = textboxes();
        fireEvent.change(title, { target: { value: "New Feature" } });

        fireEvent.click(screen.getAllByRole("combobox")[0]);
        fireEvent.click(screen.getByRole("option", { name: "Pending" }));

        fireEvent.click(screen.getAllByRole("combobox")[1]);
        fireEvent.click(screen.getByRole("option", { name: "High" }));

        fireEvent.change(confidence, { target: { value: "90%" } });
        fireEvent.change(reviewer, { target: { value: "Jane Smith" } });

        fireEvent.click(screen.getByRole("button", { name: "Add" }));

        expect(onAdd).toHaveBeenCalledWith({
            taskId: "test-uuid-123",
            title: "New Feature",
            status: "Pending",
            priority: "High",
            confidenceRate: "90%",
            reviewer: "Jane Smith",
        });
    });

    it("closes the dialog after a successful submit", () => {
        const onAdd = vi.fn();
        render(<AddTaskDialog onAdd={onAdd} />);

        fireEvent.click(screen.getByRole("button", { name: /Add Task/ }));
        fireEvent.change(textboxes()[0], { target: { value: "Reset Me" } });
        fireEvent.click(screen.getByRole("button", { name: "Add" }));

        expect(onAdd).toHaveBeenCalledTimes(1);
        expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    });
});
