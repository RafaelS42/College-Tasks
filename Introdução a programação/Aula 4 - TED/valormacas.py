while 0 == 0:
    num = int(input("Qual a quantidade de maças ?"))
    if num >= 12:
        mac = 1
    else:
        mac = 1.3
    vnum = mac * num
    print(f'R$: {vnum:.2f}')
