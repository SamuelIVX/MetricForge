import LeftColumnContent from "./left_column"
import RightColumnContent from "./right_column"

export default function MainContent(){
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left Column - Charts */}
            <LeftColumnContent />

            {/* Right Column */}
            <RightColumnContent />

        </div>
    )
}