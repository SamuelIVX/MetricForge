import Header from "./components/header/page";
import MemberDataCards from "./components/header/cards";
import MainContent from "./components/page";

import { PageProps } from "./types";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default async function Member({ params }: PageProps) {
    const { memberId } = await params;

    return (
        <div className="min-h screen p-6">

            <Button variant="ghost" className="mb-4">
                <Link href="/team">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Team
                </Link>
            </Button>

            {/* Header Section */}
            <Header id={memberId} />

            {/* Metadata Cards */}
            <MemberDataCards />

            <Separator className="my-6 bg-gray-800" />

            {/* Main Content Area */}
            <MainContent />

        </div>
    )
}