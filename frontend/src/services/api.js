import axios from 'axios';

const api = axios.create({
  baseURL: 'http://dragondjx.tk',
})

export default api;