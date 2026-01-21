import ActiveHoursLineChart from "./charts/developer_active_hours/chart"
import DeveloperGitStats from "./charts/developer_stats/chart"
import DeveloperCurrentTasks from "./charts/developer_tasks/chart"
import ListCurrentTasks from "./cards/developer_current_tasks/card"
import RecentActivity from "./cards/developer_recent_activity/card"
import DeveloperHealthCard from "./cards/developer_performance/card"

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

            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
                
                <div>
                    <ListCurrentTasks />
                </div>

                <div>
                    <RecentActivity />
                </div>

                <div>
                    <DeveloperHealthCard />
                </div>
            </div>

        </div>
    )
}