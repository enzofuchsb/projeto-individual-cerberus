function buscarQuizzes() {
    fetch("/jornada/buscarDados/" + sessionStorage.ID_USUARIO, { cache: "no-store" }).then(function (resposta) {
        if (resposta.status == 200) {
            resposta.json().then(function (dados) {
                console.log("Dados recebidos: ", JSON.stringify(dados));

                var trabalhos = montarTrabalhos(dados);
                var completos = contarCompletos(trabalhos);
                var nivel = descobrirNivel(completos);

                titulo_atual.innerHTML = "Seu título agora: " + titulos[nivel];
                lista_quizzes.innerHTML = montarCartoesQuizzes(nivel, dados.patrono);
            });
        } else {
            console.error("Nenhum dado encontrado ou erro na API");
        }
    }).catch(function (erro) {
        console.error("Erro na obtenção dos dados dos quizzes: " + erro.message);
    });
}

validarSessao();
buscarQuizzes();
