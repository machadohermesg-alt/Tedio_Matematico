import './Projeto.css'
import  BotaoPadrao from '../FuncoesTp/BotaPadrao'
function ValorFuncao(){
return(
    <div> 
        <header>
            <div className='nome-site'>
                <h1> Tédio Matematico</h1>
            </div>
        </header>
        <main>
            <BotaoPadrao texto='opa'></BotaoPadrao>
        </main>
    </div>
)
}
export default ValorFuncao