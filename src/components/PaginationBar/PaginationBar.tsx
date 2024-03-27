import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'

const PaginationBar = ({ handlePage, page, setPage }) => {
    const [counterPage, setCounterPage] = useState(15)

    const incrementalCounter = (value: number) => {
        handlePage(value)
        setPage(value)
    }

    useEffect(() => {
        if (page >= counterPage - 1) {
            setCounterPage(counterPage + 15)
        }
    }, [counterPage, page])

    return (
        <div>
            <Pagination
                count={counterPage}
                variant='outlined'
                shape='rounded'
                color='primary'
                page={page}
                onChange={(e, value) => incrementalCounter(value)}
            />
        </div>
    )
}

export default PaginationBar
