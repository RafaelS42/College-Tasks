def conta_vogais(sti):
    vogais = ['a', 'e', 'i', 'o', 'u']
    contador = 0

    for letra in sti:
        if letra.lower() in vogais:
            print(letra.lower())
            contador += 1
    return contador

while True:
    sti = input('Qual o seu desejo mais profundo ? ')
    print(f' Seu sonho mais profundo possui {conta_vogais(sti)} vogais')