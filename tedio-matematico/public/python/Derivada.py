
def derivada_simples_polinomios (funcao_coord):
    derivada_coord = []
    grau=0
    for coeficientes in funcao_coord:
        if grau!=0:
            novo_coeficiente= grau*coeficientes
            derivada_coord.append(novo_coeficiente)
        grau=grau+1    
    return  derivada_coord


