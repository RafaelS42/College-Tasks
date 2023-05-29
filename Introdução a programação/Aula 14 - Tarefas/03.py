def converte_tempo(segundos):
    hora     = int(segundos/3600)
    minuto   = int(int(segundos % 3600)/60)
    segundo  = int(segundos % 60)
    return (f'{hora}:{minuto}:{segundo}')


while True:
    print(converte_tempo(int(input(('Quantos segundos ? ')))))
