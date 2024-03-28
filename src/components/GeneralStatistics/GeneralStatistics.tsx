import React from 'react'
import s from './GeneralStatistics.module.scss'
import { secondsToMinutes } from 'utils/secondsToMinutes'
import MiniStats from 'components/MiniStats/MiniStats'
import { Skeleton } from '@mui/material'
import { CallsProps } from 'models/entities/CallsProps'
import { GeneralStatisticsProps, TotalBySource } from 'models/data/GeneralStatisticsProps'

const GeneralStatistics: React.FC<GeneralStatisticsProps> = ({ calls, loading }) => {
    /* Función para calcular la duración total de las llamadas */
    const calculateTotalDuration = (calls: CallsProps[]): string => {
        let totalDuration = 0
        calls.forEach((call) => {
            totalDuration += call.duration
        })
        const hours = Math.floor(totalDuration / 3600)
        const minutes = Math.floor((totalDuration % 3600) / 60)
        const seconds = totalDuration % 60
        return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }

    /* Función para calcular el promedio de duración de las llamadas */
    const calculateAverageDuration = (calls: CallsProps[]): string => {
        let totalDuration = 0
        calls.forEach((call) => {
            totalDuration += call.duration
        })
        const numberOfCalls = calls.length
        const averageDuration = totalDuration / numberOfCalls
        return secondsToMinutes(averageDuration)
    }

    /* Función para calcular el total de llamadas por fuente */
    const calculateTotalBySource = (calls: CallsProps[]): TotalBySource => {
        const totalBySource: TotalBySource = {}
        calls.forEach((call) => {
            const source = call.source
            if (totalBySource[source]) {
                totalBySource[source]++
            } else {
                totalBySource[source] = 1
            }
        })
        return totalBySource
    }

    return (
        <div className={s.container}>
            <div className={`${s.stats} ${s.calls_time}`}>
                <h1 className={s.title}>Tiempo total de llamadas</h1>
                {!loading ? (
                    <div className={s.text}>{calculateTotalDuration(calls)}</div>
                ) : (
                    <Skeleton width={126} height={30} />
                )}
            </div>
            <div className={`${s.stats} ${s.calls_average}`}>
                <h1 className={s.title}>Promedio de duración de llamadas</h1>
                {!loading ? (
                    <div className={s.text}>{calculateAverageDuration(calls)} min.</div>
                ) : (
                    <Skeleton width={126} height={30} />
                )}
            </div>

            <MiniStats
                dataAgents={calculateTotalBySource(calls)}
                title={'Total de llamadas por fuente'}
                loading={loading}
            />
        </div>
    )
}

export default GeneralStatistics
