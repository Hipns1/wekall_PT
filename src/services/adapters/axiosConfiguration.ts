import axios, { AxiosInstance } from 'axios'
const axiosClient = new Map<String, AxiosInstance>()
/* Esta URL base, deberia estar en una variable de entorno .env*/
const baseUrl = 'http://ec2-54-158-34-140.compute-1.amazonaws.com:8000'

axiosClient.set(
	'wekall',
	axios.create({
		baseURL: baseUrl
	}),
)

const get = async (url: string, headers = {}, params = {}) => {
	if (axiosClient) {
		const response = await axiosClient?.get('wekall').get(url, {
			headers,
			params,
		})
		return response.data
	}
}

const exportedObject = {
	get
};

export default exportedObject

