import axios from 'axios'

const api = axios.create({
  baseURL: 'https://example-api.local',
  timeout: 5000,
})

export default api
