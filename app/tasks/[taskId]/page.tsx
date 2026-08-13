/**
 * Task/decision detail route — composes header + left/right columns for a task id.
 */
import Header from "./components/header/page";
import MetaDataCards from "./components/header/cards";
import MainContent from "./components/page";

import { PageProps } from "./types";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

/**
 * Decision detail page.
 * @param params - route params promise with `taskId`.
 * @returns Detail layout.
 * @example
 * // Route `/tasks/[taskId]` — server page for one decision
 * <DecisionId params={Promise.resolve({ taskId: "1" })} />
 */
export default async function DecisionId({ params }: PageProps) {
    const { taskId } = await params;

    return (
        <div className="min-h screen p-6">

            <Button variant="ghost" className="mb-4">
                <Link href="/tasks">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                </Link>
            </Button>

            {/* Header Section */}
            <Header id={taskId} />

            {/* Metadata Cards */}
            <MetaDataCards />

            <Separator className="my-6 bg-gray-800" />

            {/* Main Content Area */}
            <MainContent />

        </div>
    )
}
