/**
 * HTTP stub for creating/listing decisions.
 * Returns 501 until the backend decision engine is wired.
 */
import { NextResponse } from "next/server"

/**
 * Accept a new decision payload (not implemented).
 * @returns JSON `{ message }` with HTTP 501.
 * @example
 * const res = await POST()
 * // => 501 JSON { message: "Not implemented yet" }
 */
export async function POST() {
    return NextResponse.json(
        { message: "Not implemented yet" },
        { status: 501 }
    )
}
