/**
 * HTTP stub for acknowledging a decision (HITL accept).
 * Returns 501 until the decision workflow API is implemented.
 */
import { NextResponse } from "next/server"

/**
 * Acknowledge a decision (not implemented).
 * @returns JSON `{ message }` with HTTP 501.
 * @example
 * const res = await POST()
 * // => 501 JSON { message: "Not implemented yet" } (path: .../acknowledge)
 */
export async function POST() {
    return NextResponse.json(
        { message: "Not implemented yet" },
        { status: 501 }
    )
}
