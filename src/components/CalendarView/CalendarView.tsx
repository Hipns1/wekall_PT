import React, { useState } from 'react'
import Calendar from 'react-calendar'
import s from './CalendarView.module.scss'
import calendar from '../../assets/calendar.png'
import close from '../../assets/close.png'
import moment from 'moment'
import { CalendarViewProps } from 'models/data/CalendarViewProps'

const CalendarView: React.FC<CalendarViewProps> = ({ startDate, endDate, handleDate, loading }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleCalendar = () => {
        !loading && setIsOpen(!isOpen)
    }

    return (
        <div className={s.container}>
            <div className={s.icon}>
                <img alt='' src={calendar} onClick={handleCalendar} />
            </div>
            <div className={isOpen ? `${s.calendar_container} ${s.isOpen}` : `${s.calendar_container} ${s.isClose}`}>
                <img alt='' src={close} onClick={() => setIsOpen(!isOpen)} className={s.icon_close} />
                <Calendar
                    maxDate={new Date()}
                    locale={'es-ES'}
                    showNeighboringMonth={true}
                    className={s.calendar}
                    selectRange={true}
                    onChange={(date: any) => handleDate(date)}
                    value={[moment(startDate).toDate(), moment(endDate).toDate()]}
                />
                <button className={s.btn} onClick={() => setIsOpen(!isOpen)}>
                    Aplicar
                </button>
            </div>
        </div>
    )
}

export default CalendarView
