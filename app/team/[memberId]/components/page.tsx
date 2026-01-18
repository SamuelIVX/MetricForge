import ActiveHoursLineChart from "./charts/developer_active_hours/page"
import DeveloperGitStats from "./charts/developer_stats/page"
import DeveloperCurrentTasks from "./charts/developer_tasks/page"
import CurrentTasks from "./cards/developer_current_tasks/page"
import RecentActivity from "./cards/developer_recent_activity/page"

export default function MainContent() {
    return (
        <div>
            <ActiveHoursLineChart />

            <div className="grid grid-cols-2 gap-4 pt-4">

                <div>
                    <DeveloperGitStats />
                </div>

                <div>
                    <DeveloperCurrentTasks />
                </div>

                <div>
                    <CurrentTasks />
                </div>

                <div>
                    <RecentActivity />
                </div>

            </div>

        </div>
    )
}