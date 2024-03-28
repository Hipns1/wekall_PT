import s from './EmptyState.module.scss'
import emptySvg from '../../assets/empty.svg'

const EmptyState = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>No hay datos disponibles</h1>
            <h1 className={s.subtitle}>Intenta nuevamente.</h1>
            <img alt='' src={emptySvg} />
        </div>
    )
}

export default EmptyState
