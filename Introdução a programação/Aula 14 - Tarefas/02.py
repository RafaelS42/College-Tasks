def calcula_fatorial(num):
    resul = 1
    if num == 0:
        return '0! = 1'
    for x in range(1,num+1):
        resul *= x
        print(f'{x}! =' ,resul)
    return resul

a = calcula_fatorial(7)
print(a)