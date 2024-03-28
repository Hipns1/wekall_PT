import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import CalendarView from 'components/CalendarView/CalendarView'
import moment from 'moment'
import s from './Filters.module.scss'
import { FiltersProps } from 'models/data/FilterProps'

const Filters: React.FC<FiltersProps> = ({
    setCallType,
    callType,
    limit,
    setLimit,
    startDate,
    setStartDate,
    setEndDate,
    endDate,
    loading,
}) => {
    const handleStorage = (key: string, data: string) => {
        const existingKey = localStorage.getItem(key)
        if (existingKey === null) {
            localStorage.setItem(key, JSON.stringify(data))
        } else {
            localStorage.setItem(key, JSON.stringify(data))
        }
    }

    const handleType = (e: any) => {
        const callTypeStorage = e.target.value
        handleStorage('call_type', callTypeStorage)
        setCallType(callTypeStorage)
    }

    const handleLimit = (e: any) => {
        const limitStorage = e.target.value
        handleStorage('limit', limitStorage)
        setLimit(limitStorage)
    }

    const handleDate = (date: any[]) => {
        const startDateStorage = moment(date[0]).format('YYYY-MM-DD')
        handleStorage('start_date', startDateStorage)
        setStartDate(startDateStorage)
        const endDateStorage = moment(date[1]).format('YYYY-MM-DD')
        handleStorage('end_date', endDateStorage)
        setEndDate(endDateStorage)
    }

    return (
        <div className={s.container}>
            <div className={s.filters_container}>
                <FormControl sx={{ m: 1, minWidth: 140 }} size='small'>
                    <InputLabel className={s.title} id='demo-controlled-open-select-label'>
                        Tipo
                    </InputLabel>
                    <Select
                        sx={{ '& fieldset': { borderColor: '#00536B' } }}
                        labelId='demo-controlled-open-select-label'
                        id='demo-controlled-open-select'
                        value={callType}
                        label='Age'
                        onChange={handleType}
                        disabled={loading}>
                        <MenuItem value={'todos'}>Todos</MenuItem>
                        <MenuItem value={'inbound'}>inbound</MenuItem>
                        <MenuItem value={'outbound'}>outbound</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 140 }} size='small'>
                    <InputLabel className={s.title} id='demo-controlled-open-select-label'>
                        Items
                    </InputLabel>
                    <Select
                        sx={{ '& fieldset': { borderColor: '#00536B' } }}
                        labelId='demo-controlled-open-select-label'
                        id='demo-controlled-open-select'
                        value={limit}
                        label='Age'
                        onChange={handleLimit}
                        disabled={loading}>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </FormControl>

                <CalendarView startDate={startDate} endDate={endDate} handleDate={handleDate} loading={loading} />
            </div>
        </div>
    )
}

export default Filters
