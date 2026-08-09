import "./Projeto.css"
import NomeSiteClicavel from "../FuncoesTp/NomeSiteClicavel"   
import EspacoHeader from "../FuncoesTp/EspacoHeader"
import CaixaRentagular from "../FuncoesTp/fCaixaRetangular"

function Sobre(){
    return(
        <div className="pagina-wrapper">
            <header>
                <EspacoHeader>
                    <NomeSiteClicavel texto='Tédio Matemático' para='/pagina-inicial'></NomeSiteClicavel>
                    <div className='nome-site'>
                        <h1>Sobre</h1>
                    </div>
                  </EspacoHeader> 
            </header>
            <main>
               <h1>Sobre o Tédio Matemático</h1>
               <CaixaRentagular>
               <section>
                <h2>
                    O que é
                    </h2>
                    <p> Antes mais nada, sou Hermes aluno na UFMG em matemática computacional e estou no quinto período, 
                        fiz a reopção recentemente em 2026/2 para este curso e meu curso anterior era Bacharelado em Matemática.</p>   
                       <p> O nome Tédio Matemático surgiu durante uma noite de insônia, onde decidi programar alguns problemas de matemática no Python, 
                        como Multiplicação de matrizes, que por sinal ainda não criei uma página para ele no projeto.
                        Posteriormente continuei desenvolvendo novas funcionalidades e decidi criar esta página web.
                         Embora pudesse ter feito em JS para facilitar, mas decidi aprender a rodar Python na página como forma de aprendizagem com Pyodide, 
                         e uma consequência foi deixar a página mais lenta. Por isso, o botão resultado fica indisponível até carregar o Pyodide.

                    </p>
                
               </section>
               </CaixaRentagular>
               <CaixaRentagular>
               <section>
                <h2>
                    Como funciona
                </h2>
                   <p>
                                A tradução para Python utiliza a ideia de isomorfismo entre espaços vetoriais:
                                o espaço Rⁿ⁺¹, com base canônica (e₁, e₂, ..., eₙ₊₁), e o espaço dos polinômios de grau até n, 
                                com base (1, x, x², ..., xⁿ), são isomorfos. Por exemplo, o 
                            polinômio 1 + x² pode ser escrito como a lista [1, 0, 1], essa ideia simples 
                            foi a base para toda a tradução usada no projeto.
                    </p>
                    <p>
                        O cálculo do valor da função polinomial percorre essa lista com um contador de 
                        grau, começando em zero: resultado = resultado + coeficiente · valor^grau, onde  valor é o x. 
                        Em TypeScript, foi criada uma função que traduz o texto digitado 
                        para esse mesmo formato. Por isso a escolha de usar botões em vez de digitação livre: simplifica bastante o parsing. Ainda existe um bug conhecido, expressões 
                        como 3·x não funcionam corretamente, a forma correta hoje é digitar 3x direto, 
                        que será corrigido em atualizações futuras. Mais detalhes técnicos no README do GitHub.
                    </p>
               </section>
               </CaixaRentagular>
               <CaixaRentagular>
               <section>
              <p>
                Arrumar bugs, organizar melhor código, implementar as outras páginas, e pensar como traduzir funções  trigonométricas, exponenciais, racionais e logarítmicas. Por enquanto penso em 
                utilizar séries de Maclaurin para trigonométricas e exponenciais, centradas em zero, pois estas convergem para todo dominio real e para as duas últimas é necessário definir um domínio específico para cada caso,
                  devido à não existência de logaritmo para x negativo nos reais, e, de forma análoga, por exemplo retirar o x = 0 para 1/x, onde está função f é definida 
                como f: R\❲0❳ → R, onde utilizarei a princípio uma mescla de série de Maclaurin e Laurent.
            </p>
            <p>
                Posteriormente, implementar a parte de álgebra, grafos, etc.
            </p>
                        </section>   
               </CaixaRentagular>
               
            </main>
            <footer>

            </footer>
        </div>
    )
}
export default Sobre