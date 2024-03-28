import { CallsProps } from 'models/entities/CallsProps'

export interface TotalBySource {
    [source: string]: number
}

export interface GeneralStatisticsProps {
    calls: CallsProps[]
    loading: boolean
}
