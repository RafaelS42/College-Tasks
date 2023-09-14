console.log("Calculo de médias do aluno");

const notas = new Array();
notas[0] = parseFloat(prompt('Primeira nota ='));
notas[1] = parseFloat(prompt('Segunda nota  ='));
notas[2] = parseFloat(prompt('Terceira nota ='));

let media = ((notas[0]+notas[1]+notas[2]) / 3);

alert(" A média é " + media)

if (media >= 7 ) {
    alert('Aluno passou!')
} else if (media <= 4 ) {
    alert('Aluno Reprovou')
} else {
    alert('Aluno na recuperação')
    notas[3] = parseFloat(prompt('Nota da recuperação ='));
    console.log(((notas[3] + media) / 2 ))

    if (((notas[3] + media) / 2 ) >= 5) {
        alert('Aluno aprovado')
    } else {
        alert('Aluno Reprovado')
    }
}
