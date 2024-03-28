import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import s from './MiniStats.module.scss'

const MiniStats = ({ dataAgents, title }) => {
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
            <Pie data={data} />
            {agentNames.length !== 0 ? null : <div className={s.error}>No existen datos</div>}
        </div>
    )
}

export default MiniStats
