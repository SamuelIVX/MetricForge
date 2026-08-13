/**
 * Shared prop types for the task/decision detail page and its panels.
 */
/** App Router page props with async `taskId` params. */
/**
 * Next.js page props for `/tasks/[taskId]` (async `params`).
 */
export type PageProps = {
    params: Promise<{
        taskId: string,
    }>
}

/** Header section props keyed by decision/task id. */
/**
 * Props for the task detail header (`id` of the task).
 */
export type HeaderProps = {
    id: string
}

/** Props for a single metadata KPI card in the decision header. */
/**
 * Props for a metadata tile in the task header.
 */
export type MetaDataProps = {
    Icon: React.ElementType,
    title: string,
    subcontent: string,
    color: string
}

/** Props for one recommended remediation action row. */
/**
 * Props for one hardcoded recommended action row.
 */
export type RecommendedActionProps = {
    action: string,
    description: string
}

/** Props for one related-task row in the detail right column. */
/**
 * Props for one hardcoded related-task row.
 */
export type RelatedTaskProps = {
    task: string,
    status: string,
    status_color: string,
    issue: string,
}
