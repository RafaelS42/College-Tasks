def encontra_palavras(list,a_letra):
    lista_com_a = []
    for palavra in list:
        for letra in palavra:
            if letra == a_letra:
                lista_com_a.append(palavra)
    return lista_com_a
a = ['No', 'deserto', 'de', 'Arrakis,', 'também', 'conhecido', 'como', 'Duna,', 'existem', 'segredos', 'que', 'desafiam', 'a', 'compreensão', 'humana.', 'A', 'areia', 'escaldante', 'cobre', 'vastas', 'extensões,', 'formando', 'dunas', 'imensas', 'que', 'escondem', 'mistérios', 'ancestrais.', 'O', 'povo', 'Fremen,', 'nativo', 'desse', 'planeta', 'árido,', 'domina', 'as', 'artes', 'da', 'sobrevivência', 'nesse', 'ambiente', 'inóspito.']

print(encontra_palavras(a,'d'))