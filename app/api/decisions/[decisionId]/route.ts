/**
 * HTTP stub for a single decision by id (read/update).
 * Returns 501 until persistence and the decision engine exist.
 */
import { NextResponse } from "next/server"

/**
 * Handle a decision by id (not implemented).
 * @returns JSON `{ message }` with HTTP 501.
 * @example
 * const res = await POST()
 * // => 501 JSON { message: "Not implemented yet" } (path: /api/decisions/:decisionId)
 */
export async function POST() {
    return NextResponse.json(
        { message: "Not implemented yet" },
        { status: 501 }
    )
}
