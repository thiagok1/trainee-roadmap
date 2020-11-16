import React,{useState, useCallback} from 'react'
import api from './services/api'
import Header from './components/Header'
import Box from './components/Box'
import './App.css'

function App () {
    let [cep,setCep] = useState()
    let [info,setInfo] = useState({
        logradouro:"Rua",
        bairro : "Bairro",
        localidade:"Cidade",
        uf:"Estado"
    })
    
    
    const handlleSearch = useCallback (async () => {
        const{data} = await await api.get(cep+'/json/')
        setInfo(data)
        console.log(data)
    })

    
    return (
        <div id = "box">
        <Header title = "CEP app" />
        <input type ="text" placeholder = {'nome'}/>
        <input type ="text" placeholder = {'e-mail'}/>
        <input type ="int" placeholder = {'celular'}/>
        <input type="int" value={cep}  onChange={(e) => setCep(e.target.value)} placeholder = {'cep'} />
        <button type="button" onClick ={handlleSearch} >pesquise</button>
        <Box title = {info.logradouro}/>
        <Box title = {info.bairro}/>
        <Box title = {info.localidade}/>
        <Box title = {info.uf}/>
        </div>
    )   
}
export default App;