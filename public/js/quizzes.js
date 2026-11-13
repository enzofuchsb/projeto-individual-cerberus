// ===== QUIZZES =====
// Busca os dados para saber o título e o patrono da pessoa.
// As regras de cada quiz estão no jornada.js.
fetch('/perfil/dados/' + idUsuario)
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (dados) {
        var trabalhos = montarTrabalhos(dados);
        var nivel = descobrirNivel(contarCompletos(trabalhos));

        titulo_atual.innerHTML = 'Seu título agora: ' + titulos[nivel];
        lista_quizzes.innerHTML = montarCartoesQuizzes(nivel, dados.patrono);
    });
