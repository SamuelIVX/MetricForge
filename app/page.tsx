/**
 * App root route — immediately redirects to the decisions/tasks inbox.
 */
import { redirect } from "next/navigation";

/**
 * Landing redirect into the main inbox.
 * @returns Never resolves a UI; calls `redirect("/tasks")`.
 * @example
 * // Route `/` — redirects to `/tasks`
 * <Home />
 */
export default function Home() {
    redirect("/tasks");
}
