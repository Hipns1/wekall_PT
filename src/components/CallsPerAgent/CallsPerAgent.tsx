import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import s from './CallsPerAgent.module.scss'

const CallsPerAgent = ({ callsPerAgent }) => {
    ChartJS.register(ArcElement, Tooltip, Legend)
    const agentNames = Object.keys(callsPerAgent)
    const callsData = Object.values(callsPerAgent)

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
            <h1 className={s.title}>Numero de llamadas</h1>
            <Doughnut data={data} />
        </div>
    )
}

export default CallsPerAgent
