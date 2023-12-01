console.log('.JS.')

  const dados = obterMensagens()

function criarTabela(dados) {

    dados.sort(function(a, b) {
        return b.id - a.id;
      });

    var tabela = $('<table>').attr('border', '1');

    // Criação do cabeçalho da tabela
    var cabecalho = $('<tr>');
    $.each(dados[0], function(chave) {
      $('<th>').text(chave.charAt(0).toUpperCase() + chave.slice(1)).appendTo(cabecalho);
    });
    cabecalho.appendTo(tabela);

    // Preenchimento da tabela com dados
    $.each(dados, function(_, pessoa) {
      var linha = $('<tr>');
      $.each(pessoa, function(chave, valor) {
        var celula = $('<td>').text(valor).appendTo(linha);

        // Adicionando uma classe à célula de mensagem
        if (chave === 'mensagem') {
          celula.addClass('mensagem');
        }
      });
      linha.appendTo(tabela);
    });

    tabela.appendTo('#tab');

     //  criarTabela(dados);
}

function obterMensagens() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    return retorno;
}

function inserirMensagem(obj) {

    /*
    var obj = {
            nome: "nome da pessoa", 
            email: "email informado", 
            mensagem: "a mensagem informada"} 
    */

    var obj = {
        nome: document.getElementById('nome').value, 
        email: document.getElementById('email').value, 
        mensagem: document.getElementById('mensagem').value} 

    var inserir = $.ajax({

        url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(obj),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
    });

    console.log('Inserido')
}

function validarUsuario(objLoginSenha) {

    //email: admin@admin.com
    //senha: '1234'

    /*

    var objLoginSenha = {
            email: "email informado", 
            senha: "senha informada"} 

    */

    var objLoginSenha = {
        email: document.getElementById('login').value,
        senha: document.getElementById('senha').value
    }
    var retorno = false;

    console.log(objLoginSenha);

    var validacao = $.ajax({
        url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
                },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function(){
        return retorno;
    });

    validacao.done(function(data) {
        retorno = data;
        if(retorno == true){
            location.href = "emails.html"
        }
    });

    return retorno;
}