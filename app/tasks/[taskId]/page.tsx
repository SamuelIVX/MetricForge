import Header from "./components/header";
import MetaDataCards from "./components/cards";
import MainContent from "./components/charts";

import { PageProps } from "./types";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

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
            <Header id={taskId}/>

            {/* Metadata Cards */}
            <MetaDataCards />

            <Separator className="my-6" />
            
            {/* Main Content Area */}
            <MainContent />

        </div>
    )
}