import React from 'react'
import s from './GeneralStatistics.module.scss'
import { secondsToMinutes } from 'utils/secondsToMinutes'
import MiniStats from 'components/MiniStats/MiniStats'
import { Skeleton } from '@mui/material'

const GeneralStatistics = ({ calls, loading }) => {
    /* Funcion para calcular la duracion total de las llamadas */
    const calculateTotalDuration = (calls) => {
        let totalDuration = 0
        calls.forEach((call) => {
            totalDuration += call.duration
        })
        const hours = Math.floor(totalDuration / 3600)
        const minutes = Math.floor((totalDuration % 3600) / 60)
        const seconds = totalDuration % 60
        return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }

    /* Funcion para calcular el promedio de duracion de las llamadas*/
    const calculateAverageDuration = (calls) => {
        let totalDuration = 0
        calls.forEach((call) => {
            totalDuration += call.duration
        })
        const numberOfCalls = calls.length
        const averageDuration = totalDuration / numberOfCalls
        return secondsToMinutes(averageDuration)
    }

    /* Funcion para calcular el total de llamadas por fuente */
    const calculateTotalBySource = (calls) => {
        const totalBySource = {}
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
                <h1 className={s.title}>Promedio de duracion de llamadas</h1>
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
