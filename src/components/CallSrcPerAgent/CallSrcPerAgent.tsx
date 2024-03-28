import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import s from './CallSrcPerAgent.module.scss'
import { Skeleton } from '@mui/material'
import { CallsProps } from 'models/entities/CallsProps'
import { CallSrcPerAgentProps } from 'models/data/CallSrcPerAgentProps'

const CallSrcPerAgent: React.FC<CallSrcPerAgentProps> = ({ calls, loading }) => {
    ChartJS.register(CategoryScale, LinearScale, BarElement)

    /* Calcular el número de llamadas de cada fuente por agente */
    const calculateSourceRelation = (callsData: CallsProps[]) => {
        const sourcePerAgent: Record<string, Record<string, number>> = {}
        callsData.forEach((call) => {
            if (!sourcePerAgent[call.agent]) {
                sourcePerAgent[call.agent] = {}
            }
            const source = call.source
            if (!sourcePerAgent[call.agent][source]) {
                sourcePerAgent[call.agent][source] = 0
            }
            sourcePerAgent[call.agent][source]++
        })
        return sourcePerAgent
    }

    const sourcePerAgent = calculateSourceRelation(calls)

    /* Encontrar todas las fuentes únicas asociadas a todos los agentes */
    const allSources = Object.values(sourcePerAgent)
        .flatMap((agent) => Object.keys(agent))
        .filter((value, index, self) => self.indexOf(value) === index)

    const agentNames = Object.keys(sourcePerAgent)

    const datasets = agentNames.map((agent) => {
        const data = allSources.map((source) => sourcePerAgent[agent][source] || 0)
        return {
            label: agent,
            backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
            data: data,
        }
    })

    const data = {
        labels: allSources,
        datasets: datasets,
    }

    return (
        <div className={s.container}>
            <h1 className={s.title}>Fuente de las llamadas</h1>
            {!loading ? (
                <Bar data={data} data-testid='bar-chart' />
            ) : (
                <Skeleton data-testid='skeleton' width={540} height={270} animation={'wave'} />
            )}
        </div>
    )
}

export default CallSrcPerAgent
