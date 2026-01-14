import { LucideIcon } from "lucide-react"

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