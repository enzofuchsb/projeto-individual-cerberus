// ===== O MITO ESTÁ NO SEU DIA A DIA =====
// Cada item é um objeto com nome, tipo e de onde vem.
var itens = [
    { nome: 'Nike', tipo: 'Marca', origem: 'Nice (Nike, em grego) é a deusa alada da vitória. O símbolo da marca lembra a asa dela.' },
    { nome: 'Pandora', tipo: 'Marca', origem: 'Pandora foi a primeira mulher, criada pelos deuses e cheia de presentes: o nome quer dizer "todos os dons".' },
    { nome: 'Hermès', tipo: 'Marca', origem: 'Hermes é o mensageiro dos deuses, com sandálias aladas.' },
    { nome: 'Amazon', tipo: 'Marca', origem: 'As amazonas eram um povo de mulheres guerreiras. Héracles enfrentou a rainha delas, Hipólita.' },
    { nome: 'Ajax', tipo: 'Marca', origem: 'Ájax foi um dos heróis gregos mais fortes da Guerra de Troia.' },
    { nome: 'Olympikus', tipo: 'Marca', origem: 'O nome vem do Olimpo, a montanha onde moravam os deuses.' },
    { nome: 'Pânico', tipo: 'Palavra', origem: 'Pã, deus dos bosques, assustava os viajantes com gritos que causavam um medo de repente.' },
    { nome: 'Eco', tipo: 'Palavra', origem: 'A ninfa Eco foi castigada por Hera: só conseguia repetir o final do que os outros diziam.' },
    { nome: 'Narcisismo', tipo: 'Palavra', origem: 'Narciso se apaixonou pelo próprio reflexo na água e não conseguiu mais sair dali.' },
    { nome: 'Hipnose', tipo: 'Palavra', origem: 'Hipnos é o deus do sono, irmão de Tânato, a morte.' },
    { nome: 'Música', tipo: 'Palavra', origem: 'Vem de "arte das Musas", as nove deusas das artes e da memória.' },
    { nome: 'Museu', tipo: 'Palavra', origem: 'Era o "lugar das Musas", um templo dedicado a elas.' },
    { nome: 'Atlas', tipo: 'Palavra', origem: 'O livro de mapas leva o nome do titã condenado a segurar o céu.' },
    { nome: 'Calcanhar de Aquiles', tipo: 'Expressão', origem: 'O único ponto fraco do herói Aquiles. Hoje quer dizer o ponto fraco de alguém.' },
    { nome: 'Caixa de Pandora', tipo: 'Expressão', origem: 'Pandora abriu o jarro que espalhou os males pelo mundo. Lá dentro ficou só a esperança.' },
    { nome: 'Uma verdadeira odisseia', tipo: 'Expressão', origem: 'A Odisseia conta os dez anos de viagem de Odisseu para voltar para casa.' },
    { nome: 'Presente de grego', tipo: 'Expressão', origem: 'O cavalo de madeira que os gregos deram a Troia estava cheio de soldados.' },
    { nome: 'Trabalho de Hércules', tipo: 'Expressão', origem: 'Hércules é o nome romano de Héracles, o herói dos doze trabalhos impossíveis.' },
    { nome: 'Fio de Ariadne', tipo: 'Expressão', origem: 'O fio que Ariadne deu a Teseu para ele achar a saída do labirinto.' },
    { nome: 'Pomo da discórdia', tipo: 'Expressão', origem: 'A maçã de ouro "para a mais bela" que fez três deusas brigarem e começou a Guerra de Troia.' }
];

var tipos = ['Todos', 'Palavra', 'Expressão', 'Marca'];


// monta um cartão para cada item da lista
function mostrarItens(lista) {
    var html = '';

    for (var i = 0; i < lista.length; i++) {
        html = html +
            '<article class="cartao-deus"><div class="cartao-deus-texto">' +
            '<p class="nome-grego">' + lista[i].tipo.toUpperCase() + '</p>' +
            '<h3>' + lista[i].nome + '</h3>' +
            '<p class="dominio">' + lista[i].origem + '</p>' +
            '</div></article>';
    }

    grade_mito.innerHTML = html;
}


// filtra os cartões: passa por todos os itens e guarda só os do tipo escolhido
function filtrar(numeroFiltro) {
    var tipo = tipos[numeroFiltro];
    var lista = [];

    for (var i = 0; i < itens.length; i++) {
        if (tipo == 'Todos' || itens[i].tipo == tipo) {
            lista.push(itens[i]);
        }
    }

    // acende só o botão clicado
    for (var j = 0; j < tipos.length; j++) {
        document.getElementById('filtro_' + j).className = 'filtro';
    }
    document.getElementById('filtro_' + numeroFiltro).className = 'filtro filtro-ativo';

    mostrarItens(lista);
}


mostrarItens(itens);
