import axios from "axios"

const instance = axios.create({
  baseURL: 'https://ku.qingnian8.com/dataApi/qingKu',
  timeout: 5000,
})
export default instance
