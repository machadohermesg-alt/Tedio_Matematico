import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PaginaInicial from './Paginas/PaginaInicial'
import ValorFuncao from './Paginas/ValorFuncao'
function App (){
return (
  <BrowserRouter> {/* Criando o motor que conecta cada topico   */}
    <Routes> {/*Criando o lugar que recebera cada roda */}

        <Route path= "/" element={<PaginaInicial></PaginaInicial>} />
        <Route path = "/valor-funcao" element={<ValorFuncao></ValorFuncao>}/>
        <Route path = "/pagina-inicial" element={<PaginaInicial></PaginaInicial>}/>

    </Routes>
  
  
  
  
  
  
  
  </BrowserRouter>

)
} 

export default App

