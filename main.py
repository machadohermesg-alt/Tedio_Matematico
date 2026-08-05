from Mult_Matrizes import Mult_Matrizes
from Derivada import derivada_simples_polinomios
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
print("=="*40)
print("Calculo de derivadas o coeficiente mais a esquerda é o maior grau\n")
print(f"{derivada_simples_polinomios([2,2,3,0,1,5,2])}\n")
print("=="*40)
