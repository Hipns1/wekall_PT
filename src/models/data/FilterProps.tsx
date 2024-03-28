export interface FiltersProps {
    setCallType: (callType: string) => void
    callType: string
    limit: number
    setLimit: (limit: number) => void
    startDate: any
    setStartDate: (startDate: string) => void
    setEndDate: (endDate: string) => void
    endDate: any
    loading: boolean
}
