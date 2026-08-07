
def Mult_Matrizes(Matriz1,Matriz2):
    linhas1 = len(Matriz1)
    Colunas1 = len(Matriz1[0])
    linhas2 = len(Matriz2)
    Colunas2 = len(Matriz2[0])
    if Colunas1 == linhas2:
        linhanova = linhas1
        colunanova= Colunas2
        matriz_resultante = []
        for i in range(linhanova):
            linha = []
            for j in range(colunanova):
                linha.append(0)
            matriz_resultante.append(linha)

        for i in range(linhanova):
            for j in range(colunanova):
                for k in range(linhas2):#Apenas garantindo o m do nm*mn
                    matriz_resultante[i][j] += Matriz1[i][k]*Matriz2[k][j]
        return matriz_resultante
        


    else:
        return "Erro o número de colunas da primeira matriz é diferente do número de linhas da segunda matriz"