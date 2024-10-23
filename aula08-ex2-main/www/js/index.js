document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    aplicarTemaNome();

    var chave = document.getElementById('chave');
    chave.addEventListener('click', muda);

    var salvarBtn = document.getElementById('salvar');
    salvarBtn.addEventListener('click', salvar);
}

function aplicarTemaNome() {
    const tema = localStorage.getItem('tema') || 'light';
    const nome = localStorage.getItem('nome') || '';
    
    var tudo = document.getElementById('conteudo');
    tudo.dataset.bsTheme = tema;

    var inputNome = document.getElementById('nome');
    inputNome.value = nome;

    var chave = document.getElementById('chave');
    chave.checked = (tema === 'light');
}

function muda() {
    let tema = localStorage.getItem('tema') || 'light';
    const temaV = tema === 'dark' ? 'light' : 'dark';
    localStorage.setItem('tema', temaV);

    var tudo = document.getElementById('conteudo');
    tudo.dataset.bsTheme = temaV;

    var chave = document.getElementById('chave');
    chave.checked = (temaV === 'light');
}

function salvar() {
    const nome = document.getElementById('nome').value;
    localStorage.setItem('nome', nome);
    alert('Nome salvo com sucesso!');
}
