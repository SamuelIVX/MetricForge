/**
 * HTTP stub for marking a decision as under investigation.
 * Returns 501 until the decision workflow API is implemented.
 */
import { NextResponse } from "next/server"

/**
 * Mark a decision as investigating (not implemented).
 * @returns JSON `{ message }` with HTTP 501.
 * @example
 * const res = await POST()
 * // => 501 JSON { message: "Not implemented yet" } (path: .../investigate)
 */
export async function POST() {
    return NextResponse.json(
        { message: "Not implemented yet" },
        { status: 501 }
    )
}
