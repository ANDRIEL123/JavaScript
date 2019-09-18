import axios from 'axios'

const Api = axios.create({ baseURL: 'https://api.github.com/users/andriel123' })

export default Api