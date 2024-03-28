import { CallsProps } from 'models/entities/CallsProps'

export interface PaginationBarProps {
    calls: CallsProps[]
    handlePage: (value: any) => void
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    loading: boolean
}
