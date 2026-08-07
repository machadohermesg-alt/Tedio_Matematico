import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PaginaInicial from './Paginas/PaginaInicial'
import ValorFuncao from './Paginas/ValorFuncao'
function App (){
return (
  <BrowserRouter> {/* Criando o motor que conecta cada topico   */}
    <Routes> {/* cCriando o lugar que recebera cada roda */}

        <Route path= "/" element={<PaginaInicial></PaginaInicial>} />
        <Route path = "/valor-funcao" element={<ValorFuncao></ValorFuncao>}/>


    </Routes>
  
  
  
  
  
  
  
  </BrowserRouter>

)
} 

export default App

