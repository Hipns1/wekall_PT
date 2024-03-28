import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import s from './MiniStats.module.scss'
import { Skeleton } from '@mui/material'

const MiniStats = ({ dataAgents, title, loading }) => {
    ChartJS.register(ArcElement, Tooltip, Legend)
    const agentNames = Object.keys(dataAgents)
    const callsData = Object.values(dataAgents)

    const backgroundColors = Array.from({ length: agentNames.length }, () => {
        return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256,
        )}, 0.6)`
    })

    const data = {
        labels: agentNames,
        datasets: [
            {
                backgroundColor: backgroundColors,
                data: callsData,
                hoverOffset: 4,
            },
        ],
    }

    return (
        <div className={s.container}>
            <h1 className={s.title}>{title}</h1>
            {!loading ? <Pie data={data} /> : <Skeleton width={180} height={180} animation={'wave'} />}
            {agentNames?.length !== 0 ? null : !loading ? <div className={s.error}>No existen datos</div> : null}
        </div>
    )
}

export default MiniStats
