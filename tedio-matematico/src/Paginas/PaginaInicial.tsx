import './Projeto.css';
import { Link } from 'react-router-dom'
import CaixaRetangular from '../FuncoesTp/fCaixaRetangular';

import EspacoHeader from '../FuncoesTp/EspacoHeader';
import NomeSiteClicavel from '../FuncoesTp/NomeSiteClicavel';
   /* function BotaoPadrao ({texto}:{texto: string}){
        return(
            <button  
            className='botao-padrao'> {texto}
            </button>
        )/
        
    }*/
    function BarraPadrao ({texto,para}:{texto:string, para:string}){
        return(
            <Link to={para} className='barra-padrao'>
                {texto}</Link>
        )
    }
    
    function PaginaInicial (){
        
            
        
        return(
            
            <div className="pagina-wrapper">
                <header>
                    <EspacoHeader>
                    <div className='nome-site'>
                        <h1>Tédio Matemático</h1>
                    </div>
                    <NomeSiteClicavel texto='Sobre' para='/sobre'></NomeSiteClicavel>
                    </EspacoHeader>
                </header>
                <main>

                
                    <h2> Ferramentas de matemática feitas do zero: algoritmos em Python, rodando direto no navegador via Pyodide, com interface em React e TypeScript.
                    </h2>
                    <CaixaRetangular>
                    <h3>Cálculo</h3>
                    <p>
                    Escolha uma operação:
                    </p>
                    <BarraPadrao texto='Calcular valor da função Polinomial' para='/valor-funcao'></BarraPadrao>
                    <BarraPadrao texto='Calcular a derivada da função Polinomial'para='/calcular-derivada'></BarraPadrao>
                    <BarraPadrao texto='Calcular a reta tangente da função Polinomial no ponto' para='/calcular-reta-tangente'></BarraPadrao>
                    </CaixaRetangular>
                    <CaixaRetangular> 
                    <h3>Álgebra</h3>
                    <p>
                    Escolha uma operação:
                    </p>
                    </CaixaRetangular>
                    <CaixaRetangular> 
                    <h3>Grafos</h3>
                    <p>
                    Escolha uma operação:
                    </p>
                    </CaixaRetangular>
                </main>
                <footer></footer>
            </div>
           
        )
    }
    export default PaginaInicial