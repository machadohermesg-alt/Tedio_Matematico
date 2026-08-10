import "./Projeto.css"
import NomeSiteClicavel from "../FuncoesTp/NomeSiteClicavel"
import EspacoHeader from "../FuncoesTp/EspacoHeader"

function CalcularRetaTangenteP(){
    return(
        <div className="pagina-wrapper">
            <header>
                <EspacoHeader>
                    <NomeSiteClicavel texto='Tédio Matemático' para='/pagina-inicial'></NomeSiteClicavel>
                    <NomeSiteClicavel texto='Sobre' para ='/sobre'></NomeSiteClicavel>
                </EspacoHeader>
            </header>
            <main>
                <h2> Em construção</h2>
            </main>
            <footer>
                
                    <a href="mailto:machadohermesg@gmail.com">Email</a>
                    {' · '}
                    <a href="https://www.linkedin.com/in/hermes-guimar%C3%A3es-machado-7474a7229/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    {' · '}
                    <a href="https://github.com/machadohermesg-alt" target="_blank" rel="noopener noreferrer">GitHub</a>
            
            </footer>   
        </div>

    )
}
export default CalcularRetaTangenteP