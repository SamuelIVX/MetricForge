/**
 * HTTP stub for marking a decision as under investigation.
 * Returns 501 until the decision workflow API is implemented.
 */
import { NextResponse } from "next/server"

/**
 * Mark a decision as investigating (not implemented).
 * @returns JSON `{ message }` with HTTP 501.
 * @example
 * // POST /api/decisions/:decisionId/investigate → 501 { message: "Not implemented yet" }
 */
export async function POST() {
    return NextResponse.json(
        { message: "Not implemented yet" },
        { status: 501 }
    )
}
