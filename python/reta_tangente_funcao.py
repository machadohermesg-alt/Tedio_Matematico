from valor_funcao import valor_polinomio
from Derivada import derivada_simples_polinomios
def reta_tangente_polinomio(funcao,valor):
    reta = []
    derivada = derivada_simples_polinomios(funcao)
    derivada_avaliada = valor_polinomio(derivada,valor)
    funcao_avaliada = valor_polinomio(funcao,valor)
    reta.append(derivada_avaliada*-valor+funcao_avaliada)
    reta.append(derivada_avaliada)
    return(reta)
    
# print(valor_polinomio([-6,-1,1], 2)) # -6-x+x^2 = f(x)
# print(derivada_simples_polinomios([-6,-1,1])) #f'(x)=-1+2x
# print(reta_tangente_polinomio([-6,-1,1],2)) # -10+3x
