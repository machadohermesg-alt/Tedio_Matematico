
def derivada_simples_polinomios (funcao):
    funcao_formatada = []
    derivada_formatada =[]
    derivada = []
    i=0
    for coeficientes in funcao:
        i = +i +1
        grau = len(funcao) -i
        novo_coeficiente = coeficientes*grau
        novo_grau = grau -1
        derivada.append(novo_coeficiente)
        if grau ==0:
            funcao_formatada.append(str(coeficientes))

        elif coeficientes !=0:
            funcao_formatada.append(f"{coeficientes}x^{grau}")
        if novo_grau == 0 and novo_coeficiente !=0:
            derivada_formatada.append(str(novo_coeficiente))
        elif novo_coeficiente != 0:
            derivada_formatada.append(f"{novo_coeficiente}x^{novo_grau}")    
    resultado_polinomio = " + ".join(funcao_formatada)
    resultado_derivada = " + ".join(derivada_formatada)    
    return f"A função é: {resultado_polinomio} e sua derivada é: {resultado_derivada}"        
    

