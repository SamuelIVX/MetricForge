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