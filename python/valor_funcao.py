
def valor_polinomio (funcao,valor):
    resultado = 0
    grau = 0
    for coeficientes in funcao:
        resultado = resultado + coeficientes*(valor**grau)
        grau=grau+1
    return resultado

#print(valor_polinomio([-6,-1,1], 1/2))  #-6-x+x^2 = y