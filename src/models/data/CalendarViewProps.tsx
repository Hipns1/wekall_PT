export interface CalendarViewProps {
    startDate: Date
    endDate: Date
    handleDate: (date: Date | Date[]) => void
    loading: boolean
}
