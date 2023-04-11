const form = document.getElementById('form-agenda');
let linhas = '';
const contatos = [];
const telefones = [];


form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {

    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');


    if(inputNumero.value.length < 8){
        alert (`O número ${inputNumero.value} não possui uma quantidade de dígitos necessários de um telefone`);
    }

    else{

    if (contatos.includes(inputNome.value)) {
        alert (`O contato ${inputNome.value} já foi inserido`);
    }
    else{

        if (telefones.includes(parseInt(inputNumero.value))){
            alert (`O número ${inputNumero.value} já pertence à um contato`);
        }
        else{
        contatos.push(inputNome.value);
        telefones.push(parseInt(inputNumero.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
        }
    }
}

    inputNome.value = '';
    inputNumero.value = '';
}
function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}