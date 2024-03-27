import axios from '../axiosConfiguration'

const callDataAxios = async (start_date: string, end_date: string, limit: number, page: number, callType: string) => {
    const url = `/calls?start_date=${encodeURIComponent(start_date)}&end_date=${encodeURIComponent(
        end_date,
    )}&limit=${limit}&page=${page}`
    const callType_url = `${url}&call_type=${callType}`
    if (callType && callType === 'todos') {
        const res = axios.get(url)
        return res
    } else if ((callType && callType === 'inbound') || callType === 'outbound') {
        const res = axios.get(callType_url)
        return res
    }
}

export default callDataAxios
