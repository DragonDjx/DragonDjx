import axios from 'axios';

const api = axios.create({
  baseURL: 'http://dragondjx.us-3.evennode.com',
})

export default api;