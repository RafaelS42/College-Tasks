def verifica_primo(num):
    if num == 0:
        return False
    for x in range(2 , num):
        print(x)
        if (num % x) == 0:
            return False
    return True

while True:
    print(verifica_primo(int(input('num ='))))