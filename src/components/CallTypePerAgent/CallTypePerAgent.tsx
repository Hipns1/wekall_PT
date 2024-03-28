import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import s from './CallTypePerAgent.module.scss'

const CallTypePerAgent = ({ calls }) => {
    ChartJS.register(CategoryScale, LinearScale, BarElement)

    /* Llamadas de cada tipo por agente*/
    const calculateCallsRelation = (callsData) => {
        const callsPerAgent = {}
        callsData.forEach((call) => {
            if (!callsPerAgent[call.agent]) {
                callsPerAgent[call.agent] = { inbound: 0, outbound: 0 }
            }
            if (call.call_type === 'inbound') {
                callsPerAgent[call.agent].inbound++
            } else if (call.call_type === 'outbound') {
                callsPerAgent[call.agent].outbound++
            }
        })
        return callsPerAgent
    }

    const callsRelation = calculateCallsRelation(calls)

    const agentNames = Object.keys(callsRelation)
    const inboundCalls = agentNames.map((agent) => callsRelation[agent].inbound || 0)
    const outboundCalls = agentNames.map((agent) => callsRelation[agent].outbound || 0)

    // Generar colores aleatorios
    const randomColor = () => {
        return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`
    }

    const data = {
        labels: agentNames,
        datasets: [
            {
                label: 'Inbound',
                backgroundColor: randomColor(),
                data: inboundCalls,
            },
            {
                label: 'Outbound',
                backgroundColor: randomColor(),
                data: outboundCalls,
            },
        ],
    }

    return (
        <div className={s.container}>
            <h1 className={s.title}>Tipo de llamada</h1>
            <Bar data={data} />
        </div>
    )
}

export default CallTypePerAgent
