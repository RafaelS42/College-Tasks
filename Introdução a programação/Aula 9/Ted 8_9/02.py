# VET = [3, 2, 3, 1, 3, 2]
VET= []
for x in range(10):
    VET.append(int(input(f'Digite o {x+1}° número :')))

posicoes = []
for var in range(len(VET)):
    for var2 in range((var+1), (len(VET))):
        if VET[var] == VET[var2] and var not in posicoes:
            posicoes.append(var)
            print(f'{VET[var]} repetido no {var2+1}° número')