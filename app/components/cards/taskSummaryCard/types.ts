/**
 * Prop types for task/decision summary metric cards on the inbox page.
 */
/**
 * Props for a single task summary card.
 * @param title - metric label.
 * @param value - displayed metric value.
 */
export interface SummaryCardProps{
    title: string;
    value: number | string;
}
