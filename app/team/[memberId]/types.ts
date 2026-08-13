/**
 * Shared prop types for the team member detail page and its cards/charts.
 */
/** App Router page props with async `memberId` params. */
/**
 * Next.js page props for `/team/[memberId]`.
 */
export type PageProps = {
    params: Promise<{
        memberId: string,
    }>
}

/** Header section props keyed by member id. */
/**
 * Props for the member header (`id`).
 */
export type HeaderProps = {
    id: string
}

/** Props for a single metadata KPI card in the member header. */
/**
 * Props for a member header metric tile.
 */
export type MemberDataCardProps = {
    Icon: React.ElementType,
    title: string,
    subcontent: string,
    color: string
}

/** Props for one current-task row on the member profile. */
/**
 * Props for a current-task row on the member page.
 */
export type CurrentTaskProps = {
    task: string,
    status: string,
    status_color: string,
    issue: string
}

/** Props for one recent-activity row on the member profile. */
/**
 * Props for a recent-activity row.
 */
export type ActivityProps = {
    color: string,
    assignment: string,
    time_completed: string
}

/** Props for an icon + text info chip in the member header. */
/**
 * Props for the member identity block in the header.
 */
export type MemberInfoProps = {
    Icon: React.ElementType,
    info: string
}
