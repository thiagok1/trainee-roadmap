import Axios from 'axios'

const api = Axios.create({
    baseURL:'http://viacep.com.br/ws/'
})

export default api;