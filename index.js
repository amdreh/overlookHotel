

document.addEventListener('DOMContentLoaded', function() {


    var selected = document.getElementById('powers');
    selected.addEventListener('change', function() {
        if (selected.value === 'Sim') {
            document.body.style.backgroundColor= 'black';
            evilSubtitle();
            evilText();
            evilPics();
            evilFootText();
        } else {location.reload();}
    });
});

function evilSubtitle () {
    const subtitle = document.getElementById('subtitle');
    subtitle.innerText = "SUA FAMÍLIA JAMAIS RETORNARÁ";    
}

function evilText() {
    const firstP = document.getElementById('firstP');
    const secondP = document.getElementById('secondP');

    firstP.innerText = "boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy ";
    secondP.innerText = "and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy ";
}

function evilPics() {
    document.getElementById('dannyTorrance').src = './images/evilDannyTorrance.jpeg';
    document.getElementById('jackTorrance').src = './images/evilJackTorrance.jpeg';
    document.getElementById('andreGarcia').src = './images/evilAndreGarcia.png';
    document.getElementById('stephenKing').src = './images/evilStephenKing.jpeg';
    document.getElementById('overlookHotel').src = './images/goodOverlookHotel.png';
}

function evilFootText() {
    const footText = document.getElementById('footText');
    footText.innerText = "redrumREDRUMredrum";
}


$('#cep').on('blur', function() {
    let url1 = "https://viacep.com.br/ws/";
    let url2 = $('#cep').val();
    url2 = url2.replace(/\D/g,'');
    let fullUrl = url1 + url2 + "/json/";

    $.get(fullUrl, function(data){
    var cepReturn = data;
    $('#rua').val(cepReturn.logradouro);
    $('#bairro').val(cepReturn.bairro);
    $('#cidade').val(cepReturn.localidade);
    $('#uf').val(cepReturn.uf)
    }).fail(function(){
        alert("ERRO");
    })  
});


// $.get(fullUrl, function(data) {
//     var cepReturn = data;
//     alert(cepReturn.logradouro);
//     // $('#rua').val(cepReturn.logradouro);
// }).fail(function() {
//     alert("Erro ao carregar o endereço. Por favor, verifique sua conexão de internet e tente novamente.");
// });
// });

    


// Fazendo uma requisição GET para a API
// $.get('https://viacep.com.br/ws/28909250/json/', function(data) {
//      Armazenando o retorno da API em uma variável
//     var endereco = data;
    
//      Agora você pode acessar os dados do endereço assim:
//     console.log(endereco.logradouro); // Exemplo de como acessar o logradouro
// });

// MÁSCARAS

$(document).ready(function() {
    $('#phone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00.000-000');
});