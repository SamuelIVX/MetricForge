/**
 * App root route — immediately redirects to the decisions/tasks inbox.
 */
import { redirect } from "next/navigation";

/**
 * Landing redirect into the main inbox.
 * @returns Never resolves a UI; calls `redirect("/tasks")`.
 * @example
 * <Home /> // App Router `/` — redirects to `/tasks`
 */
export default function Home() {
    redirect("/tasks");
}
