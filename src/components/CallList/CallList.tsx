import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import moment from 'moment'
import { secondsToMinutes } from 'utils/secondsToMinutes'
import s from './CallList.module.scss'

const CallList = ({ calls }: any) => {
    return (
        <div className={s.container}>
            <TableContainer component={Paper} sx={{ minWidth: 650, maxWidth: 1200 }}>
                <Table sx={{ minWidth: 650, maxWidth: 1200 }} size='small' aria-label='simple table'>
                    <TableHead>
                        <TableRow style={{ backgroundColor: 'rgba(25, 118, 210, 0.12)', color: 'red' }}>
                            <TableCell className={s.title}>Id</TableCell>
                            <TableCell align='right' className={s.title}>
                                Agente
                            </TableCell>
                            <TableCell align='right' className={s.title}>
                                Fecha de Inicio
                            </TableCell>
                            <TableCell align='right' className={s.title}>
                                Fecha de Fin
                            </TableCell>
                            <TableCell align='right' className={s.title}>
                                Duracion
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
                        {calls.map((call: any) => (
                            <TableRow key={call.id}>
                                <TableCell component='th' scope='row'>
                                    {call?.id}
                                </TableCell>
                                <TableCell align='right'>{call?.agent}</TableCell>
                                <TableCell align='right'>{moment(call?.start_date).format('YYYY/MM/DD')}</TableCell>
                                <TableCell align='right'>{moment(call?.end_date).format('YYYY/MM/DD')}</TableCell>
                                <TableCell align='right'>{secondsToMinutes(call?.duration)}</TableCell>
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
        </div>
    )
}

export default CallList
