// ===== OS 12 TRABALHOS =====
// A API manda os números e o montarTrabalhos() (jornada.js) monta a lista.
fetch('/perfil/dados/' + idUsuario)
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (dados) {
        var trabalhos = montarTrabalhos(dados);
        var completos = contarCompletos(trabalhos);
        var nivel = descobrirNivel(completos);

        resumo_trabalhos.innerHTML = completos + ' de 12 completos · Título: ' + titulos[nivel];
        mostrarTrabalhos(trabalhos);
    });


function mostrarTrabalhos(trabalhos) {
    var html = '';

    for (var i = 0; i < trabalhos.length; i++) {
        var trabalho = trabalhos[i];

        if (trabalho.atual >= trabalho.meta) {
            html = html +
                '<article class="trabalho trabalho-completo">' +
                '<div class="medalhao">' + trabalho.numero + '</div>' +
                '<h3>' + trabalho.nome + '</h3>' +
                '<p>' + trabalho.descricao + '</p>' +
                '<span class="selo-completo">✓ Completo</span>' +
                '</article>';
        } else {
            html = html +
                '<article class="trabalho">' +
                '<div class="medalhao">' + trabalho.numero + '</div>' +
                '<h3>' + trabalho.nome + '</h3>' +
                '<p>' + trabalho.descricao + '</p>' +
                '<p class="texto-progresso">Falta completar</p>' +
                '</article>';
        }
    }

    lista_trabalhos.innerHTML = html;
}
