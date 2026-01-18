export type PageProps = {
    params: Promise<{
        memberId: string,
    }>
}

export type HeaderProps = {
    id: string
}

export type MemberDataCardProps = {
    Icon: React.ElementType,
    title: string,
    subcontent: string,
    color: string
}

export type CurrentTaskProps = {
    task: string,
    status: string,
    status_color: string,
    issue: string
}

export type ActivityProps = {
    color: string,
    assignment: string,
    time_completed: string
}

export type MemberInfoProps = {
    Icon: React.ElementType,
    info: string
}