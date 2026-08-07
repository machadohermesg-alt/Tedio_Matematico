from Derivada import derivada_simples_polinomios
from valor_funcao import valor_polinomio

def verificando_existencia_raiz(funcao, interacoes, intmin, intmax):
    valormin=valor_polinomio(funcao,intmin)
    valormax = valor_polinomio(funcao,intmax)
    if valormin*valormax>0:
        for i in range(interacoes):
            




print(verificando_existencia_raiz([[-6,-1,1]],100,-1,1))


