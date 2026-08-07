import './Projeto.css';
import { Link } from 'react-router-dom'
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
    function Opcao ({children}:{children: React.ReactNode}){
        return(
        <div className='opcao-retangular'>{children}</div>
        )
    }
    function PaginaInicial (){
        
            
        
        return(
            
            <div>
                <header>
                    <div className='nome-site'>
                        <h1>Tédio Matemático</h1>
                    </div>
                </header>
                <main>

                
                    <h2> Com uma ideia simples de produzir resultados de várias
                        áreas da matemática, aos poucos melhorando meu conhecimento em Python e React/FrontEnd etc
                    </h2>
                    <Opcao>
                    <h3>Cálculo</h3>
                    <p>
                    Escolha uma operação:
                    </p>
                    <BarraPadrao texto='Calcular valor da função Polinomial' para='valor-funcao'></BarraPadrao>
                    <BarraPadrao texto='Calcular a derivada da função Polinomial'para='valor-funcao'></BarraPadrao>
                    <BarraPadrao texto='Calcular a reta tangente da função Polinomial no ponto' para='valor-funcao'></BarraPadrao>
                    </Opcao>
                    <Opcao> 
                    <h3>Álgebra</h3>
                    <p>
                    Escolha uma operação:
                    </p>
                    </Opcao>
                    <Opcao> 
                    <h3>Grafos</h3>
                    <p>
                    Escolha uma operação:
                    </p>
                    </Opcao>
                </main>
            </div>
           
        )
    }
    export default PaginaInicial