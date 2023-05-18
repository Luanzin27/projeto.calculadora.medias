const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado';
const spanReprovado = '<span class="resultado reprovado">Reprovado';
const notaMinima = parseFloat(prompt ("Digite a nota minima:"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionallinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionallinha() {
    const imputNomeAtivivdade = document.getElementById('nome-atividade');
    const imputNotaAtivivdade = document.getElementById('nota-atividade');

    atividades.push(imputNomeAtivivdade.value);
    notas.push(parseFloat(imputNotaAtivivdade.value));

    let linha = '<tr>';
    linha += `<td>${imputNomeAtivivdade.value}</td>`;
    linha += `<td>${imputNotaAtivivdade.value}</td>`;
    linha +=  `<td>${imputNotaAtivivdade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '<tr>';

    linhas += linha;
    imputNomeAtivivdade.value = '';
    imputNomeAtivivdade.value = '';

    if (atividades.includes(imputNomeAtivivdade)){
        alert(`A atividade: ${impuNomeAtividade.value} já foi inserida`);
    }
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal ();

    document.getElementById('mediaFinal-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('mediaFinal-resultado').innerHTML = mediaFinal >= notaMinima? spanAprovado : spanReprovado; 
}

function calculaMediaFinal () {
    let somaDasNotas = 0;

    for (let i = 0; i <notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;

    console.log(media);
}