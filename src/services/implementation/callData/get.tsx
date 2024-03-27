import callDataAxios from 'services/adapters/callData/get'

async function callData(start_date: string, end_date: string, limit: number = 15, page: number = 1, callType: string) {
    const startDate = `${start_date} 00:00:00`
    const endDate = `${end_date} 23:59:59`
    const data = await callDataAxios(startDate, endDate, limit, page, callType)
    return data
}

export default callData
