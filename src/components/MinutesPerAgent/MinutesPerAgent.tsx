import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js' // Asegúrate de importar CategoryScale
import { Line } from 'react-chartjs-2'
import s from './MinutesPerAgent.module.scss'

const MinutesPerAgent = ({ minuterPerAgent }) => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)
    const agentNames = Object.keys(minuterPerAgent)
    const callsData = Object.values(minuterPerAgent)

    const labels = agentNames
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Minutos totales',
                data: callsData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    }

    return (
        <div className={s.container}>
            <h1 className={s.title}>{'Minutos totales'}</h1>
            <Line data={data} />
        </div>
    )
}

export default MinutesPerAgent
