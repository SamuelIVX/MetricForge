"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TaskDetails } from "../tables/task_table/columns";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { IconSquarePlus } from "@tabler/icons-react"
import { Props } from "./types";


export function AddTaskDialog({ onAdd }: Props) {
    const [form, setForm] = useState<Omit<TaskDetails, "taskId">>({
        title: "",
        status: "",
        priority: "",
        confidenceRate: "",
        reviewer: "",
    });

    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                >
                    <IconSquarePlus /> Add Task
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-106.25">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();

                        onAdd({
                            taskId: crypto.randomUUID(),
                            ...form,
                        });

                        setForm({
                            title: "",
                            status: "",
                            priority: "",
                            confidenceRate: "",
                            reviewer: "",
                        });
                    }}
                >
                    <DialogHeader>
                        <DialogTitle>New Task</DialogTitle>
                        <DialogDescription>
                            Create a new task and add it to the decision queue.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label>Title</Label>
                            <Input
                                value={form.title}
                                onChange={(e) =>
                                    setForm({ ...form, title: e.target.value })
                                }
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label>Status</Label>
                            <Select
                                value={form.status}
                                onValueChange={(value) =>
                                    setForm({ ...form, status: value as TaskDetails["status"] })
                                }
                            >
                                <SelectTrigger className="w-45">
                                    <SelectValue
                                        placeholder="Select a Status"
                                        className="bg-(--pill-text-color)"
                                    />
                                </SelectTrigger>
                                <SelectContent className="bg-sidebar">
                                    <SelectGroup>
                                        <SelectItem
                                            value="Todo"
                                            className="text-white focus:bg-[#404040] focus:text-white"
                                        >
                                            Todo
                                        </SelectItem>
                                        <SelectItem
                                            value="Pending"
                                            className="text-white focus:bg-[#404040] focus:text-white"
                                        >
                                            Pending
                                        </SelectItem>
                                        <SelectItem
                                            value="Done"
                                            className="text-white focus:bg-[#404040] focus:text-white"

                                        >
                                            Done
                                        </SelectItem>
                                        <SelectItem
                                            value="Ignored"
                                            className="text-white focus:bg-[#404040] focus:text-white"

                                        >
                                            Ignored
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label>Priority</Label>
                            <Select
                                value={form.priority}
                                onValueChange={(value) =>
                                    setForm({ ...form, priority: value as TaskDetails["priority"] })
                                }
                            >
                                <SelectTrigger className="w-45">
                                    <SelectValue
                                        placeholder="Select a Priority"
                                        className="bg-(--pill-text-color)"
                                    />
                                </SelectTrigger>
                                <SelectContent className="bg-sidebar">
                                    <SelectGroup>
                                        <SelectItem
                                            value="Low"
                                            className="text-white focus:bg-[#404040] focus:text-white"
                                        >
                                            Low
                                        </SelectItem>
                                        <SelectItem
                                            value="Medium"
                                            className="text-white focus:bg-[#404040] focus:text-white"
                                        >
                                            Medium
                                        </SelectItem>
                                        <SelectItem
                                            value="High"
                                            className="text-white focus:bg-[#404040] focus:text-white"

                                        >
                                            High
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label>Confidence Rate</Label>
                            <Input
                                value={form.confidenceRate}
                                onChange={(e) =>
                                    setForm({ ...form, confidenceRate: e.target.value })
                                }
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label>Reviewer</Label>
                            <Input
                                value={form.reviewer}
                                onChange={(e) =>
                                    setForm({ ...form, reviewer: e.target.value })
                                }
                            />
                        </div>

                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit">Add</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    );
}
