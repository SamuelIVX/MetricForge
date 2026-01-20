export type MemberCardProps = {
    id: string
    name: string
    initials: string
    role: string
    activeTasks: number
    completedTasks: number
    commits: number
    status: string
    availability: string
    team: string
}

export type MemberDetailsProps = {
    statistic: number,
    title: string,
    color: string
}