// App.js
import React, { useState, useEffect } from 'react'
import Filters from './components/Filters/Filters'
import CallList from './components/CallList/CallList'
import Loading from './components/Loading/Loading'
import EmptyState from './components/EmptyState/EmptyState'
import AgentStats from './components/AgentStats/AgentStats'
import callData from 'services/implementation/callData/get'
import { getDate } from 'utils/getDate'

const App = () => {
    const { startDateToday, endDateToday } = getDate()
    const [calls, setCalls] = useState([])
    const [loading, setLoading] = useState(true)
    const [callType, setCallType] = useState('todos')
    const [limit, setLimit] = useState(15)
    const [page, setPage] = useState(1)
    const [startDate, setStartDate] = useState(startDateToday)
    const [endDate, setEndDate] = useState(endDateToday)

    /* Funcion general para comprobar el storage y setear */
    const handleStorage = (existingData, setData) => {
        if (existingData !== null) {
            setData(JSON.parse(existingData))
        }
    }

    /* Comprobar el storage de dates */
    useEffect(() => {
        const existingStartDate = localStorage.getItem('start_date')
        handleStorage(existingStartDate, setStartDate)
        const existingEndDate = localStorage.getItem('end_date')
        handleStorage(existingEndDate, setEndDate)
    }, [])

    /* Comprobar el storage de type */
    useEffect(() => {
        const existingCallType = localStorage.getItem('call_type')
        handleStorage(existingCallType, setCallType)
    }, [])

    /* Comprobar el storage de limit */
    useEffect(() => {
        const existingLimit = localStorage.getItem('limit')
        handleStorage(existingLimit, setLimit)
    }, [])

    /* Comprobar el storage de page */
    useEffect(() => {
        const existingPage = localStorage.getItem('page')
        handleStorage(existingPage, setPage)
    }, [setPage])

    useEffect(() => {
        const fetchCalls = async (page) => {
            try {
                setLoading(true)
                const result = await callData(startDate, endDate, limit, page, callType)
                setCalls(result)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchCalls(page)
    }, [page, limit, callType, startDate, endDate])

    return (
        <div>
            <Filters
                setCallType={setCallType}
                callType={callType}
                limit={limit}
                setLimit={setLimit}
                page={page}
                setPage={setPage}
                startDate={startDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                endDate={endDate}
            />
            {loading && <Loading />}
            {!loading && calls?.length === 0 && <EmptyState />}
            <>
                {callType !== 'todos' ? `Mostrando ${calls.length} de ${limit} resultados ` : ''}
                <h5>{`Rango de fechas: ${startDate} => ${endDate}`}</h5>
            </>
            {!loading && calls?.length > 0 && <CallList calls={calls} callType={callType} limit={limit} />}
            {/*  {!loading && calls.length > 0 && <AgentStats calls={calls} />} */}
        </div>
    )
}

export default App
