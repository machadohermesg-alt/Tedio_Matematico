//Necessário atualização quando adiocionar paginas
import { useState, useEffect } from "react"
declare global {
    interface Window {
        loadPyodide: any
    }
}
function usePyodide(){
    //sem tipar com valor nulo
    const [pyodide, setPyodide] = useState<any>(null)
    //Como esta carregando é verdadeiro
    const [carregando, setCarregando] = useState(true)
    
    //
    useEffect(() =>{
        //Como useEffect nao aceita async criamos carregr para contornar
        async function carregar() {
            //carregando
            const instancia = await window.loadPyodide()  
            
            //buscando o conteudo .py como texto
            const resposta = await fetch('/python/valor_funcao.py')
            const conteudoArquivo = await resposta.text()

            //escrevendo o arquivo de texto dentro de arquivos do Pyodide
            instancia.FS.writeFile('valor_funcao.py',conteudoArquivo)
            setPyodide(instancia)
            setCarregando(false)   
            //textando
            console.log("Arquivo carregado:", conteudoArquivo)
        }
        //chamando a funcao ira carregar
        carregar()
    },[]) // para nao fica refazendo pois [] nao muda
    return{ pyodide, carregando}
}
export default usePyodide