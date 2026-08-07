def formata_polinomio(funcao):
    funcao_formatada = []
    i=0
    coord = len(funcao)
    for coeficiente in funcao:
        grau =i
        if coeficiente != 0 and grau !=0:
            funcao_formatada.append(str(f"{coeficiente}x^{grau}"))
        elif grau==0:
            funcao_formatada.append(str(coeficiente))
        i= i+1    
    resultado = " + ".join(funcao_formatada)        
    return resultado
#print(formata_polinomio([-6,-1,1]))