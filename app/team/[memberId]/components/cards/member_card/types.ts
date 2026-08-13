/**
 * Prop types for the team roster member card and detail tiles.
 */
/** Props for the clickable member summary card on `/team`. */
/**
 * Props for the full member profile card.
 */
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

/** Props for a single statistic tile inside a member card. */
/**
 * Props for a single statistic inside the member card.
 */
export type MemberDetailsProps = {
    statistic: number,
    title: string,
    color: string
}
