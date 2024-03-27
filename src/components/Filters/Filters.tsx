import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import CalendarView from 'components/Calendar/CalendarView'
import PaginationBar from 'components/PaginationBar/PaginationBar'
import moment from 'moment'

const Filters = ({
    setCallType,
    callType,
    limit,
    setLimit,
    page,
    setPage,
    startDate,
    setStartDate,
    setEndDate,
    endDate,
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

    const handlePage = (value: string) => {
        const pageStorage = value
        handleStorage('page', pageStorage)
        setPage(pageStorage)
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
        <div>
            <div>
                <FormControl fullWidth>
                    <InputLabel id='select-type'>Tipo de llamada</InputLabel>
                    <Select
                        labelId='select-type'
                        id='simple-select-type'
                        value={callType}
                        label='Type'
                        onChange={handleType}>
                        <MenuItem value={'todos'}>Todos</MenuItem>
                        <MenuItem value={'inbound'}>inbound</MenuItem>
                        <MenuItem value={'outbound'}>outbound</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id='limit-select'>Items por pagina</InputLabel>
                    <Select
                        labelId='limit-select'
                        id='simple-select-limit'
                        value={limit}
                        label='Limit'
                        onChange={handleLimit}>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </FormControl>

                <PaginationBar handlePage={handlePage} page={page} setPage={setPage} />

                <CalendarView startDate={startDate} endDate={endDate} handleDate={handleDate} />
            </div>
        </div>
    )
}

export default Filters
