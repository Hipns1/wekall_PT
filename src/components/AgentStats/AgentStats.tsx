import React from 'react'
import CallsPerAgent from 'components/CallsPerAgent/CallsPerAgent'
import s from './AgentStats.module.scss'
import MiniStats from 'components/MiniStats/MiniStats'
import MinutesPerAgent from 'components/MinutesPerAgent/MinutesPerAgent'
import CallTypePerAgent from 'components/CallTypePerAgent/CallTypePerAgent'
import CallSrcPerAgent from 'components/CallSrcPerAgent/CallSrcPerAgent'
import { AgentStatsProps } from 'models/data/AgentStatsProps'

const AgentStats: React.FC<AgentStatsProps> = ({ calls, loading }) => {
    const callsPerAgent = calls.reduce((acc, call) => {
        acc[call.agent] = (acc[call.agent] || 0) + 1
        return acc
    }, {})

    const firstContactCallsPerAgent = calls.reduce((acc, call) => {
        if (call.first_contact) {
            acc[call.agent] = (acc[call.agent] || 0) + 1
        }
        return acc
    }, {})

    const callsBetweenExtensionsPerAgent = calls.reduce((acc, call) => {
        const originIsExtension = call.origin.length === 4
        const destinationIsExtension = call.destination.length === 4
        if (originIsExtension && destinationIsExtension) {
            acc[call.agent] = (acc[call.agent] || 0) + 1
        }
        return acc
    }, {})

    const totalMinutesPerAgent = calls.reduce((acc, call) => {
        const durationMinutes = call.duration / 6
        acc[call.agent] = (acc[call.agent] || 0) + durationMinutes
        return acc
    }, {})

    const externalCallsPerAgent = calls.reduce((acc, call) => {
        const originIsNonExtension = call.origin.length > 4
        const destinationIsNonExtension = call.destination.length > 4
        if (originIsNonExtension || destinationIsNonExtension) {
            acc[call.agent] = (acc[call.agent] || 0) + 1
        }
        return acc
    }, {})

    return (
        <div className={s.container}>
            <h2>Estadísticas de Agentes</h2>
            <div className={s.body}>
                <div className={s.first_container}>
                    <CallsPerAgent callsPerAgent={callsPerAgent} loading={loading} />
                    <div className={s.minutes_stats}>
                        <div className={s.other_stats}>
                            <MiniStats
                                dataAgents={externalCallsPerAgent}
                                title={'Llamadas externas'}
                                loading={loading}
                            />
                            <MiniStats
                                dataAgents={firstContactCallsPerAgent}
                                title={'Primer contacto'}
                                loading={loading}
                            />
                            <MiniStats
                                dataAgents={callsBetweenExtensionsPerAgent}
                                title={'Llamadas entre extensiones'}
                                loading={loading}
                            />
                        </div>
                        <MinutesPerAgent minuterPerAgent={totalMinutesPerAgent} loading={loading} />
                    </div>
                </div>
                <div className={s.second_container}>
                    <CallTypePerAgent calls={calls} loading={loading} />
                    <CallSrcPerAgent calls={calls} loading={loading} />
                </div>
            </div>
        </div>
    )
}

export default AgentStats
