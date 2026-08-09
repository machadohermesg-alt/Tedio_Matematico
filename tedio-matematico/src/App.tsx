import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PaginaInicial from './Paginas/PaginaInicial'
import ValorFuncao from './Paginas/ValorFuncao'
import CalcularDerivadaP from './Paginas/CalculaDerivada'
import CalcularRetaTangenteP from './Paginas/CalcularRetaTangente'
import Sobre from './Paginas/Sobre'
function App (){
return (
  <BrowserRouter basename='/Tedio_Matematico'> {/* Criando o motor que conecta cada topico */}
    <Routes> {/*Criando o lugar que recebera cada roda */}

        <Route path= "/" element={<PaginaInicial></PaginaInicial>} />
        <Route path = "/valor-funcao" element={<ValorFuncao></ValorFuncao>}/>
        <Route path = "/pagina-inicial" element={<PaginaInicial></PaginaInicial>}/>
        <Route path = "/calcular-derivada" element={<CalcularDerivadaP></CalcularDerivadaP>}></Route>
        <Route path = "/calcular-reta-tangente" element={<CalcularRetaTangenteP></CalcularRetaTangenteP>}></Route>
        <Route path = "/sobre" element={<Sobre></Sobre>}></Route>
    </Routes>
  
  
  
  
  
  
  
  </BrowserRouter>

)
} 

export default App

