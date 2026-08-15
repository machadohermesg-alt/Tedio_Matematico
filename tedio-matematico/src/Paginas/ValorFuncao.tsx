import './Projeto.css'
import  BotaoPadrao from '../FuncoesTp/BotaPadrao'
import CaixaRetangular from '../FuncoesTp/fCaixaRetangular'
import NomeSiteClicavel from '../FuncoesTp/NomeSiteClicavel'
import Display from '../FuncoesTp/Display'
import { useState } from 'react'
import CaixaBotao from '../FuncoesTp/CaixaBotao'
import usePyodide from '../hooks/usePyodide'
import EspacoHeader from '../FuncoesTp/EspacoHeader'


function ValorFuncao(){
    // Agora apos recebe setValorF 5+23, o novo valor é adicionado em valorF e envia para display
    const [valorF,setValorF] = useState("")
    const [valorX, setValorX] = useState("")
    const [Result, setResult] = useState("")
    const { pyodide, carregando} = usePyodide()
    //testando o bloqueio do botão calcular
    //console.log("Pyodide:", pyodide)
    //console.log("Carregando:", carregando)
   
    /*definindo a ordem de prioridade e recebe o chamado do display*/
    const [campoAtivo, setCampoAtivo] = useState<"valorF" | "valorX">("valorF")
    /*Seta o novo valor para setValorF ou setValorx para o useState ex (5+2)+3 concatena 5+23*/
    function adicionarTexto(caractere: string){
        let valorAtual
        if(campoAtivo =='valorF'){
            valorAtual =valorF
        }else{
            valorAtual= valorX
        }  
        const retiraEspaco= valorAtual.trim()
        const ultimoCaractere = retiraEspaco.slice(-1)
        if(caractere==='x'&&ultimoCaractere==='x'){
            return
        }
        const penutimoCaractere =retiraEspaco.slice(-2,-1)
        const caracteresespeciais = ['+','-','·',',',]
        const caracteresespeciais2 = ['/', '^', ' + ', ' - ', ' · ']
        for (const elementoAtual of caracteresespeciais){
            for(const elementoCandidato of caracteresespeciais2){
            if (ultimoCaractere === elementoAtual && caractere ===elementoCandidato){
                return 
             } 
            }
        }
            if (ultimoCaractere === '/' && caractere =='0'){
                return
        } 
            if(campoAtivo=="valorX" &&caractere ==='x'){
                return
            }
            const naoPermitidosComeco = ['/',' · ','^']
            for(const elementos of naoPermitidosComeco){
                if (ultimoCaractere == '' &&caractere==elementos){
                    return
                }
            }
        
            const numeros  = ['0','1','2','3','4','5','6','7','8','9']
            if (!numeros.includes(ultimoCaractere)&& caractere===','){
                return
            }
       

            //2^x ainda não está configurado logo
            if(numeros.includes(penutimoCaractere)&& ultimoCaractere=== '^' && caractere==='x'){
                return
            }
            //nem funcoes racionais
            if(numeros.includes(penutimoCaractere)&&ultimoCaractere==='/' &&caractere==='x'){
                return
            }
        const  maisCaracteres = [' · ','/','+']
        if(maisCaracteres.includes(caractere) &&ultimoCaractere =='^'){
            return
        }

        if (campoAtivo === "valorF"){
            setValorF(valorF + caractere) /*Valor antigo "" */
        }else{
            setValorX(valorX + caractere)
        }
    }
    function apagarTudo(){
        if (campoAtivo === "valorF"){
            setValorF("")
        }else{
            setValorX("")
        }
    }
    function apagar (){
        const valorFSemEspaco =valorF.trim()
        const valorXSemEspaco = valorX.trim()
        if (campoAtivo === "valorF"){ 
            
            // Pega tudo menos o ultimo elemento
            setValorF(valorFSemEspaco.slice(0,-1))
        }else{
            setValorX(valorXSemEspaco.slice(0,-1))
        }
    }
    // funcao de teste
    function calcular(){
         
       const coeficientes =traduzirparaCoeficientes(valorF)
       const x =traduzirX(valorX)
       //console.log("Coeficientes:", coeficientes, "X:", x)
       // importando o arquivo
       const modulo = pyodide.pyimport('valor_funcao')
        
       //chamando a funcao
       const valorCalculado = modulo.valor_polinomio(coeficientes,x)
       //console.log("Resultado do Python:", valorCalculado)

        
        if(isNaN(valorCalculado)){
            setResult("Erro: expressão inválida")
            return
        }
        if(!isFinite(valorCalculado)){
            setResult("Erro: divisão por zero")
            return
        }
       setResult(String(valorCalculado).replace('.',','))
    }
    //Aonde acontece a magica da função, chamando as outras funções auxiliares
    function traduzirparaCoeficientes(expressao:string){
        let termos = []
        let dicDados = []
        const termos1 = separarEmTermos(expressao)
        
        for (let termo of termos1){
            
            let aux = calculadora(termo)
            
            termos.push(String(aux))
        }

        for(let termo of termos){
            //criando dicionario com os termos, coeficiente e grau
            let dados = dic(termo)
            
            dicDados.push(dados)
        }
        //console.log(dicDados)
        //pegando o maior grau, que irá dar o tamanho da lista
        let maiorGrau =0
        for(let dados of dicDados){
            if (dados.grau>maiorGrau){
                maiorGrau= dados.grau
            }
        }    
        //criando a lista, ex 3x+5x^5 cria com seis elementos [0,0,0,0,0,0]
        const resultado = []
        for(let i = 0; i<=maiorGrau;i++){
            resultado.push(0)
        }   
        //console.log (resultado)
        //console.log(maiorGrau)
        //colocando os dados e somando
        for(const dados of dicDados){
            //somando os graus e colocando na posicao correta
            resultado[dados.grau]= resultado[dados.grau]+dados.coeficiente
        }
      
        return resultado
       
        
    }
    //criando dicionario para traduzir para coeficientes
    function dic (termo:string){
        if(termo.includes('x')){
            const partesSemX= termo.split('x')
            const coeficienteXs = partesSemX[0]
            const depoisX= partesSemX[1]
            //mudandado 2,5x para 2.5x  e será necessário refazer quando o termo não possuir x
            const coeficienteX = coeficienteXs.replace(',','.')
            let coeficiente = Number(coeficienteX)
            if (coeficienteX ===''||coeficienteX==="+"){
                coeficiente=1
            }else if(coeficienteX==='-'){
                coeficiente=-1
            }
            let grau =1
            if (depoisX.includes('^')){
                const elementoGrau = depoisX.split('^')
                grau = Number(elementoGrau[1])
            }
            return { coeficiente: coeficiente, grau:grau}
        }else{
            const termoFormatado = termo.replace(',','.')
            return { coeficiente: Number(termoFormatado), grau:0}
        }
        
    }
    function calculadora (termo:string){
        let numero =0
        if(termo.includes('·')&&termo.includes('x')){
        //Correção do bug calculadora aceita agora y·x
         let termoSemVezes = termo.replace('·','')
         return(termoSemVezes)

        }else if(termo.includes('·')&&!termo.includes('x')){
            let termoSemVezes = termo.split("·")
            
            numero = Number(termoSemVezes[0])*Number(termoSemVezes[1])
            return(String(numero))
        }else if(termo.includes('^') && !termo.includes('x') ){
            let termoSemPotencia = termo.split('^')
            numero = Number(termoSemPotencia[0])**Number(termoSemPotencia[1])
            return(String(numero))
            //formato x/y
        }else if(termo.includes('/')&&termo.includes('x')&&termo.length==3){
           
           let termoSemBarra = termo.split('/')
           //pegando o coefiente que é do tipo 1/y
           let coeficente = termoSemBarra[1]
           //transfromando em decimal
           let decimal = 1/Number(coeficente)
           //ficando x,x
           termoSemBarra[1] =termoSemBarra[0]
           //recebendo o decimal
           termoSemBarra[0] = String(decimal)
           //junstnado
           let juntando = termoSemBarra.join("")
            return(juntando)

            //formato (y/z)x
        }else if ((termo.includes('/')&&termo.includes('x')&&termo.length==4)) {
            let termoSemBarra = termo.split('/')
            let juntando = termoSemBarra.join("")
            console.log(juntando)
            let decimal = Number(juntando[0])/Number(juntando[1])
            let cocatenano = String(decimal)+'x'
            return(cocatenano)
                
            
          
        }else if(termo.includes('/')){
            let termoSemBarra = termo.split('/')
            
            numero = Number(termoSemBarra[0])/Number(termoSemBarra[1])
            return (String(numero))
        }else{
            return termo
        }
        
    }
    function separarEmTermos(expressao:string){
        const termos = []
        let termoAtual =""
        for(let caractere of expressao){
            if((caractere==="+"||caractere==="-") &&termoAtual!==""){
                termos.push(termoAtual)
                termoAtual= caractere
            }else{
                termoAtual = termoAtual+caractere.trim()
            }
            
        
        }
        termos.push(termoAtual) //ultimo termo
        
        return termos
    }
    //Aonde acontece a magica do valor de X chamando outras funcoes
     function traduzirX(expressao:string){
        let termos = separarEmTermos(expressao)
        let valor = 0
        for(let termo of termos){
            const termoCorrigido = termo.replace(',','.')
            valor = Number(calculadora(termoCorrigido))+valor
        }
        //console.log("O valor de x inserido é: ",valor)
        return valor
     }
    return( 
    <div className="pagina-wrapper"> 
        <header>
           <EspacoHeader>
            <NomeSiteClicavel texto='Tédio Matemático' para='/pagina-inicial'></NomeSiteClicavel>
            <NomeSiteClicavel texto ='Sobre' para ='/sobre'></NomeSiteClicavel>
            </EspacoHeader> 
        </header>
        <main>
            <CaixaRetangular>
            
            <h2>Calculadora de valores de uma função polinomial</h2>
            <p>Função:</p>
            {/* Recebendo o valor novo e mudando na tela, e aoClicar  o setCampoAtivo o novo */}
            <Display valor={valorF} aoClicar={() => setCampoAtivo("valorF")}></Display>
            <p>Valor de x:</p>
            <Display valor={valorX} aoClicar={()=> setCampoAtivo("valorX")}></Display>
            <CaixaBotao>
         <BotaoPadrao texto='×' aoClicar={() => adicionarTexto(' · ')}></BotaoPadrao>
            <BotaoPadrao texto='1' aoClicar={() => adicionarTexto('1')}></BotaoPadrao>
            <BotaoPadrao texto='2' aoClicar={() => adicionarTexto('2')}></BotaoPadrao>
            <BotaoPadrao texto='3' aoClicar={() => adicionarTexto('3')}></BotaoPadrao>
            <BotaoPadrao texto='Apagar' aoClicar={apagar}></BotaoPadrao>

            <BotaoPadrao texto='÷' aoClicar={() => adicionarTexto('/')}></BotaoPadrao>
            <BotaoPadrao texto='4' aoClicar={() => adicionarTexto('4')}></BotaoPadrao>
            <BotaoPadrao texto='5' aoClicar={() => adicionarTexto('5')}></BotaoPadrao>
            <BotaoPadrao texto='6' aoClicar={() => adicionarTexto('6')}></BotaoPadrao>
            <BotaoPadrao texto='Apagar tudo' aoClicar={apagarTudo}></BotaoPadrao>

            <BotaoPadrao texto='+' aoClicar={() => adicionarTexto(' + ')}></BotaoPadrao>
            <BotaoPadrao texto='7' aoClicar={() => adicionarTexto('7')}></BotaoPadrao>
            <BotaoPadrao texto='8' aoClicar={() => adicionarTexto('8')}></BotaoPadrao>
            <BotaoPadrao texto='9' aoClicar={() => adicionarTexto('9')}></BotaoPadrao>
            <BotaoPadrao texto='xʸ' aoClicar={() => adicionarTexto('^')}></BotaoPadrao>

            <BotaoPadrao texto='-' aoClicar={() => adicionarTexto(' - ')}></BotaoPadrao>
            <BotaoPadrao texto='0' aoClicar={() => adicionarTexto('0')}></BotaoPadrao>
            <BotaoPadrao texto=',' aoClicar={() => adicionarTexto(',')}></BotaoPadrao>
            <BotaoPadrao texto='x' aoClicar={() => adicionarTexto('x')}></BotaoPadrao>
         

            <BotaoPadrao texto ='Calcular' aoClicar={calcular} disabled={carregando} ></BotaoPadrao>
            
            </CaixaBotao>
            <p>Resultado: </p>
            <Display valor={Result} aoClicar={()=>{}} ></Display>
            </CaixaRetangular>
            

            
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
export default ValorFuncao