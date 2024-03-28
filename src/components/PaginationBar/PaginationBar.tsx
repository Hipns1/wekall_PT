import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import { PaginationBarProps } from 'models/data/PaginationBarProps'

const PaginationBar: React.FC<PaginationBarProps> = ({ calls, handlePage, page, setPage, loading }) => {
    const paginationActive = () => {
        if (calls.length !== 0) {
            return 15
        } else return 0
    }
    const [counterPage, setCounterPage] = useState<number>(paginationActive())

    const incrementalCounter = (value: number) => {
        handlePage(value)
        setPage(value)
    }

    useEffect(() => {
        if (calls.length !== 0 && page >= counterPage - 1) {
            setCounterPage(counterPage + 15)
        }
    }, [counterPage, page, calls])

    return (
        <div>
            <Pagination
                count={counterPage}
                variant='outlined'
                shape='rounded'
                color='primary'
                page={page}
                disabled={loading}
                onChange={(e, value) => incrementalCounter(value)}
            />
        </div>
    )
}

export default PaginationBar
