import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import moment from 'moment'
import { secondsToMinutes } from 'utils/secondsToMinutes'
import s from './CallList.module.scss'
import SkeletonLoader from './SkeletonLoader'
import { CallsProps } from 'models/entities/CallsProps'
import { CallListProps } from 'models/data/CallListProps'

const CallList: React.FC<CallListProps> = ({ calls, loading }) => {
    if (loading) {
        return <SkeletonLoader />
    } else {
        return (
            <div className={s.container}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 529 }}>
                        <Table size='small' aria-label='simple table'>
                            <TableHead
                                style={{
                                    position: 'sticky',
                                    top: 0,
                                    zIndex: 1,
                                    backgroundColor: 'rgb(225, 240, 255)',
                                }}>
                                <TableRow>
                                    <TableCell className={s.title}>Id</TableCell>
                                    <TableCell align='right' className={s.title}>
                                        Agente
                                    </TableCell>
                                    <TableCell align='right' className={s.title}>
                                        Fecha
                                    </TableCell>
                                    <TableCell align='right' className={s.title}>
                                        Estado
                                    </TableCell>
                                    <TableCell align='right' className={s.title}>
                                        Duración
                                    </TableCell>
                                    <TableCell align='right' className={s.title}>
                                        Tipo
                                    </TableCell>
                                    <TableCell align='right' className={s.title}>
                                        Fuente
                                    </TableCell>
                                    <TableCell align='right' className={s.title}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {calls.map((call: CallsProps) => (
                                    <TableRow key={call.id}>
                                        <TableCell component='th' scope='row'>
                                            {call?.id}
                                        </TableCell>
                                        <TableCell align='right'>{call?.agent}</TableCell>
                                        <TableCell align='right'>
                                            {moment(call?.start_date).format('YYYY/MM/DD')}
                                        </TableCell>
                                        <TableCell align='right'>{call?.status} </TableCell>
                                        <TableCell align='right'>{secondsToMinutes(call?.duration)} min.</TableCell>
                                        <TableCell align='right'>{call?.call_type}</TableCell>
                                        <TableCell align='right'>{call?.source}</TableCell>
                                        <TableCell align='right'>
                                            {call?.origin?.length === 4 && call?.destination?.length === 4
                                                ? 'Interna'
                                                : 'Externa'}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        )
    }
}

export default CallList
