import LeftColumnContent from "./left_column/page"
import RightColumnContent from "./right_column/page"

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