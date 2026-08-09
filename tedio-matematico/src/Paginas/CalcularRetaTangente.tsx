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

            </footer>   
        </div>

    )
}
export default CalcularRetaTangenteP