# Tédio Matemático

Site com ferramentas de matemática construídas do zero: algoritmos em Python, 
rodando direto no navegador via Pyodide, com interface em React e TypeScript.

🔗 **[Acesse o site aqui](https://machadohermesg-alt.github.io/Tedio_Matematico/)**

## O que é

Antes mais nada, sou Hermes aluno na UFMG em matemática computacional e estou no quinto período, 
fiz a reopção recentemente em 2026/2 para este curso e meu curso anterior era Bacharelado em Matemática.

O nome Tédio Matemático surgiu durante uma noite de insônia, onde decidi programar alguns problemas de matemática no Python, 
como Multiplicação de matrizes, que por sinal ainda não criei uma página para ele no projeto.
Posteriormente continuei desenvolvendo novas funcionalidades e decidi criar esta página web.
Embora pudesse ter feito em JS para facilitar, mas decidi aprender a rodar Python na página como forma de aprendizagem com Pyodide, 
e uma consequência foi deixar a página mais lenta. Por isso, o botão resultado fica indisponível até carregar o Pyodide.

## Como funciona

 A tradução para Python utiliza a ideia de isomorfismo entre espaços vetoriais:
 o espaço Rⁿ⁺¹, com base canônica (e₁, e₂, ..., eₙ₊₁), e o espaço dos polinômios de grau até n, 
 com base (1, x, x², ..., xⁿ), são isomorfos. Por exemplo, o 
  polinômio 1 + x² pode ser escrito como a lista [1, 0, 1], essa ideia simples 
  foi a base para toda a tradução usada no projeto.

 O cálculo do valor da função polinomial percorre essa lista com um contador de 
  grau, começando em zero: resultado = resultado + coeficiente · valor^grau, onde  valor é o x. 
  Em TypeScript, foi criada uma função que traduz o texto digitado 
  para esse mesmo formato. Por isso a escolha de usar botões em vez de digitação livre: simplifica bastante o parsing. Ainda existe um bug conhecido, expressões 
  como 3·x não funcionam corretamente, a forma correta hoje é digitar 3x direto, 
  que será corrigido em atualizações futuras. Mais detalhes técnicos no README do GitHub.

## Stack

- **Python** — algoritmos matemáticos (multiplicação de matrizes, derivada de 
  polinômio, valor de polinômio, reta tangente)
- **Pyodide** — roda o Python real dentro do navegador via WebAssembly, sem 
  necessidade de servidor backend
- **React + TypeScript** — interface e lógica de tradução (texto digitado → 
  lista de coeficientes)
- **CSS** — responsivo, com media queries

## Próximos passos

  Arrumar bugs, organizar melhor código, implementar as outras páginas, e pensar como traduzir funções  trigonométricas, exponenciais, racionais e logarítmicas. Por enquanto penso em 
  utilizar séries de Maclaurin para trigonométricas e exponenciais, centradas em zero, pois estas convergem para todo dominio real e para as duas últimas é necessário definir um domínio específico para cada caso,
  devido à não existência de logaritmo para x negativo nos reais, e, de forma análoga, por exemplo retirar o x = 0 para 1/x, onde está função f é definida 
  como f: R\❲0❳ → R, onde utilizarei a princípio uma mescla de série de Maclaurin e Laurent.

Posteriormente, implementar a parte de álgebra, grafos, etc.

*Vou especificar melhor cada etapa conforme o tempo permitir, entre as aulas 
da faculdade.*

## Rodando localmente

## Rodando localmente

\`\`\`bash
npm install
npm run dev
\`\`\`
