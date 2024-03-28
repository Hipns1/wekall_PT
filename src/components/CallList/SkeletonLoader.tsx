import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const SkeletonLoader = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table size='small' aria-label='simple table'>
                    <TableHead>
                        <TableRow style={{ backgroundColor: 'rgba(25, 118, 210, 0.12)' }}>
                            <TableCell>
                                <Skeleton animation='wave' height={40} width={50} />
                            </TableCell>
                            <TableCell>
                                <Skeleton animation='wave' height={40} width={110} />
                            </TableCell>
                            <TableCell>
                                <Skeleton animation='wave' height={40} width={110} />
                            </TableCell>
                            <TableCell>
                                <Skeleton animation='wave' height={40} width={110} />
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
                        {new Array(15).fill(null).map((_, index) => (
                            <TableRow key={index}>
                                <TableCell component='th' scope='row'>
                                    <Skeleton animation='wave' width={50} />
                                </TableCell>
                                <TableCell>
                                    <Skeleton animation='wave' width={110} />
                                </TableCell>
                                <TableCell>
                                    <Skeleton animation='wave' width={110} />
                                </TableCell>
                                <TableCell>
                                    <Skeleton animation='wave' width={110} />
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
