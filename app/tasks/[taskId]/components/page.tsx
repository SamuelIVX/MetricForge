/**
 * Main two-column body for the decision/task detail page.
 */
import LeftColumnContent from "./left_column/page"
import RightColumnContent from "./right_column/page"

/**
 * Composes left (charts/tables) and right (actions/related) detail columns.
 * @returns Responsive three-column grid (2+1 on large screens).
 * @example
 * <MainContent />
 */
export default function MainContent() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left Column */}
            <LeftColumnContent />

            {/* Right Column */}
            <RightColumnContent />

        </div>
    )
}
