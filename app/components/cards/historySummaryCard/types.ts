/**
 * Prop types for history summary metric cards on the history page.
 */
/**
 * Props for a single history summary card.
 * @param title - metric label.
 * @param value - displayed metric value.
 */
export interface HistoryCardProps{
    title: string;
    value: number | string;
}
