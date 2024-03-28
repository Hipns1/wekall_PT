// App.js
import React, { useState, useEffect, useCallback } from 'react'
import Filters from './components/Filters/Filters'
import CallList from './components/CallList/CallList'
import EmptyState from './components/EmptyState/EmptyState'
import AgentStats from './components/AgentStats/AgentStats'
import callData from 'services/implementation/callData/get'
import { getDate } from 'utils/getDate'
import s from './styles/App.module.scss'
import { setLocalStorage } from 'utils/setLocalStorage'
import PaginationBar from 'components/PaginationBar/PaginationBar'
import { Skeleton } from '@mui/material'
import GeneralStatistics from 'components/GeneralStatistics/GeneralStatistics'

const App = () => {
    const { startDateToday, endDateToday } = getDate()
    const [calls, setCalls] = useState([])
    const [loading, setLoading] = useState(true)
    const [callType, setCallType] = useState('todos')
    const [limit, setLimit] = useState(15)
    const [page, setPage] = useState(1)
    const [startDate, setStartDate] = useState(startDateToday)
    const [endDate, setEndDate] = useState(endDateToday)

    /* Funcion para manejar la paginacion */
    const handlePage = (value: string) => {
        const pageStorage = value
        setLocalStorage('page', pageStorage)
        setPage(Number(pageStorage))
    }

    /* Funcion general para comprobar el storage y setear  + effect*/
    const handleStorage = useCallback((key: string, setData) => {
        const existingData = localStorage.getItem(key)
        if (existingData !== null) {
            setData(JSON.parse(existingData))
        }
    }, [])
    useEffect(() => {
        const storageMappings = {
            start_date: setStartDate,
            end_date: setEndDate,
            call_type: setCallType,
            page: setPage,
            limit: setLimit,
        }

        for (const key in storageMappings) {
            if (Object.hasOwnProperty.call(storageMappings, key)) {
                handleStorage(key, storageMappings[key])
            }
        }
    }, [handleStorage])

    /* Manejo de la peticion */
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
        <div className={s.container}>
            <div className={s.header}>
                <Filters
                    setCallType={setCallType}
                    callType={callType}
                    limit={limit}
                    setLimit={setLimit}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                    endDate={endDate}
                    loading={loading}
                />
            </div>
            <div className={s.body}>
                <div>
                    <div className={s.pagination_container}>
                        <div className={s.date_container}>
                            <h4>{`Rango de fechas: ${startDate} => ${endDate}`}</h4>
                            {callType !== 'todos' && (
                                <>
                                    {!loading ? (
                                        <p>{`Mostrando ${calls.length} de ${limit} resultados`}</p>
                                    ) : (
                                        <Skeleton />
                                    )}
                                </>
                            )}
                        </div>
                        <PaginationBar
                            calls={calls}
                            handlePage={handlePage}
                            page={page}
                            setPage={setPage}
                            loading={loading}
                        />
                    </div>
                    {!loading && calls?.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <div className={s.table_container}>
                            <div className={s.table}>
                                <div className={s.modify}>
                                    <CallList calls={calls} loading={loading} />
                                </div>
                                <GeneralStatistics calls={calls} loading={loading} />
                            </div>
                            <AgentStats calls={calls} loading={loading} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
