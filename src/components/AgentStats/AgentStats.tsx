import CallsPerAgent from 'components/CallsPerAgent/CallsPerAgent'
import s from './AgentStats.module.scss'
import MiniStats from 'components/MiniStats/MiniStats'
import MinutesPerAgent from 'components/MinutesPerAgent/MinutesPerAgent'

const AgentStats = ({ calls }: any) => {
    console.log(calls)
    /* Funcion que calcula el numero de llamadas totales por agente */
    const callsPerAgent = calls.reduce((acc, call) => {
        acc[call.agent] = (acc[call.agent] || 0) + 1
        return acc
    }, {})

    /* Funcion que calcula el numero de llamdas que son primer contacto por agente */
    const firstContactCallsPerAgent = calls.reduce((acc, call) => {
        if (call.first_contact) {
            acc[call.agent] = (acc[call.agent] || 0) + 1
        }
        return acc
    }, {})

    /* Llamadas entre extenciones por agente */
    const callsBetweenExtensionsPerAgent = calls.reduce((acc, call) => {
        const originIsExtension = call.origin.length === 4
        const destinationIsExtension = call.destination.length === 4
        if (originIsExtension && destinationIsExtension) {
            acc[call.agent] = (acc[call.agent] || 0) + 1
        }
        return acc
    }, {})

    /* Total de minutos por agente */
    const totalMinutesPerAgent = calls.reduce((acc, call) => {
        const durationMinutes = call.duration / 6
        acc[call.agent] = (acc[call.agent] || 0) + durationMinutes
        return acc
    }, {})

    /* Llamadas externas por agente */
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
                <CallsPerAgent callsPerAgent={callsPerAgent} />
                <div className={s.minutes_stats}>
                    <div className={s.other_stats}>
                        <MiniStats dataAgents={externalCallsPerAgent} title={'Llamadas externas'} />
                        <MiniStats dataAgents={firstContactCallsPerAgent} title={'Primer contacto'} />
                        <MiniStats dataAgents={callsBetweenExtensionsPerAgent} title={'Llamadas entre extensiones'} />
                    </div>
                    <MinutesPerAgent minuterPerAgent={totalMinutesPerAgent} />
                </div>
            </div>
        </div>
    )
}

export default AgentStats
