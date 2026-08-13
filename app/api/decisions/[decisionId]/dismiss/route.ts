/**
 * HTTP stub for dismissing a decision (HITL ignore).
 * Returns 501 until the decision workflow API is implemented.
 */
import { NextResponse } from "next/server"

/**
 * Dismiss a decision (not implemented).
 * @returns JSON `{ message }` with HTTP 501.
 * @example
 * // POST /api/decisions/:decisionId/dismiss → 501 { message: "Not implemented yet" }
 */
export async function POST() {
    return NextResponse.json(
        { message: "Not implemented yet" },
        { status: 501 }
    )
}
