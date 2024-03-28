import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const SkeletonLoader = ({ limit }) => {
    return (
        <div>
            <TableContainer component={Paper} sx={{ minWidth: 650, maxWidth: 1200 }}>
                <Table sx={{ minWidth: 650, maxWidth: 1200 }} size='small' aria-label='simple table'>
                    <TableHead>
                        <TableRow style={{ backgroundColor: 'rgba(25, 118, 210, 0.12)' }}>
                            <TableCell>
                                <Skeleton animation='wave' height={40} width={50} />
                            </TableCell>
                            <TableCell>
                                <Skeleton animation='wave' height={40} width={140} />
                            </TableCell>
                            <TableCell>
                                <Skeleton animation='wave' height={40} width={140} />
                            </TableCell>
                            <TableCell>
                                <Skeleton animation='wave' height={40} width={140} />
                            </TableCell>
                            <TableCell>
                                <Skeleton animation='wave' height={40} width={80} />
                            </TableCell>
                            <TableCell>
                                <Skeleton animation='wave' height={40} width={80} />
                            </TableCell>
                            <TableCell>
                                <Skeleton animation='wave' height={40} width={70} />
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {new Array(limit).fill(null).map((_, index) => (
                            <TableRow key={index}>
                                <TableCell component='th' scope='row'>
                                    <Skeleton animation='wave' width={50} />
                                </TableCell>
                                <TableCell>
                                    <Skeleton animation='wave' width={140} />
                                </TableCell>
                                <TableCell>
                                    <Skeleton animation='wave' width={140} />
                                </TableCell>
                                <TableCell>
                                    <Skeleton animation='wave' width={140} />
                                </TableCell>
                                <TableCell>
                                    <Skeleton animation='wave' width={80} />
                                </TableCell>
                                <TableCell>
                                    <Skeleton animation='wave' width={80} />
                                </TableCell>
                                <TableCell>
                                    <Skeleton animation='wave' width={70} />
                                </TableCell>
                                <TableCell>
                                    <Skeleton animation='wave' width={100} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default SkeletonLoader
