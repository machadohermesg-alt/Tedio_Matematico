from Mult_Matrizes import Mult_Matrizes
from Derivada import derivada_simples_polinomios
from formata_funcao import formata_polinomio
from valor_funcao import valor_polinomio
from reta_tangente_funcao import reta_tangente_polinomio
# print("Primeira Matriz")
# linhas1 = int(input("Defina a quantidade de linhas: "))
# Colunas1 = int(input("Defina a quantidade de Colunas: "))
# print("=="*40)
# print("Segunda Matriz")
# linhas2 = int(input("Defina a quantidade de linhas: "))
# Colunas2 = int(input("Defina a quantidade de Colunas: "))
# print("=="*40)
# Matriz1 = []
# Matriz2 = []
# for i in range(linhas1):
#     linha = []
#     for j in range(Colunas1):
#         linha.append(0)
#     Matriz1.append(linha)
# for i in range(linhas2):
#     linha = []
#     for j in range(Colunas2):
#         linha.append(0)
#     Matriz2.append(linha)
# print("Matriz 1 inserir dados\n")            
# for i in range(linhas1):
#     for j in range(Colunas1):
#         Matriz1[i][j] = float(input(f"Insira o elemento {i}{j}: "))
# print("=="*40)  
# print("Matriz 2 inserir dados\n")            
# for i in range(linhas2):
#     for j in range(Colunas2):
#          Matriz2[i][j] = float(input(f"Insira o elemento {i}{j}: "))
# print("=="*40)  
# for linha in Matriz1:
#     print(linha)
# print("=="*40)
# for linha in Matriz2:
#     print(linha)    
# print("=="*40)
# print("Multiplicação da matriz 1 pela matriz 2\n")
# matriz =  Mult_Matrizes(Matriz1, Matriz2)
# for linha in matriz:
#     print(linha)

 #=========DERIVADA===========
# print("=="*40)
# print("Calculo de derivadas o coeficiente mais a esquerda é o maior grau\n")
# funcao = [5,2,0,-2,5] #5 +2x +0x^2 -2x^3+5x^4 seguindo a convencao de transformacoes lineares
# derivada = derivada_simples_polinomios(funcao)
# print(derivada)
# print(f"A função é: {formata_polinomio(funcao)}\n")
# print(f"Sua derivada é: {formata_polinomio(derivada)}\n")
# print("=="*40)


#=====Valor da Função==============
# print("Calculo da função polinomia no formato (1,2,0,4) = 1 + 2x + 4x^3")
# funcao = [-6,-1,1]
# ponto = 0.5
# valor = valor_polinomio(funcao, ponto)
# print(f"A função é: {formata_polinomio(funcao)}\n")
# print(f"E o valor no ponto {ponto} é: {valor}")


#===Reta Tangente=============
# print("Calculo da reta tangente de uma função no ponto escolhido")
# funcao = [-6,-1,1]
# ponto = -2
# retatg = reta_tangente_polinomio(funcao,ponto)
# print(f"A função é: {formata_polinomio(funcao)}\n")
# print(f"A reta tangente no ponto {ponto} é: f(x) = {formata_polinomio(retatg)}")