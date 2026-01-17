export type PageProps = {
    params: Promise<{
        taskId: string,
    }>
}

export type HeaderProps = {
    id: string
}

export type MetaDataProps = {
    Icon: React.ElementType,
    title: string,
    subcontent: string,
    color: string
}

export type RecommendedActionProps = {
    action: string,
    description: string
}

export type RelatedTaskProps = {
    task: string,
    status: string,
    status_color: string,
    issue: string,
}