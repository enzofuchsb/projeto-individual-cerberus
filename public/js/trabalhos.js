function buscarTrabalhos() {
    fetch("/jornada/buscarDados/" + sessionStorage.ID_USUARIO, { cache: "no-store" }).then(function (resposta) {
        if (resposta.status == 200) {
            resposta.json().then(function (dados) {
                console.log("Dados recebidos: ", JSON.stringify(dados));

                var trabalhos = montarTrabalhos(dados);
                var completos = contarCompletos(trabalhos);
                var nivel = descobrirNivel(completos);

                resumo_trabalhos.innerHTML = completos + " de 12 completos · Título: " + titulos[nivel];
                mostrarTrabalhos(trabalhos);
            });
        } else {
            console.error("Nenhum dado encontrado ou erro na API");
        }
    }).catch(function (erro) {
        console.error("Erro na obtenção dos dados dos trabalhos: " + erro.message);
    });
}

function mostrarTrabalhos(trabalhos) {
    var html = "";

    for (var i = 0; i < trabalhos.length; i++) {
        if (trabalhos[i].atual >= trabalhos[i].meta) {
            html = html +
                "<article class='trabalho trabalho-completo'>" +
                "<div class='medalhao'>" + trabalhos[i].numero + "</div>" +
                "<h3>" + trabalhos[i].nome + "</h3>" +
                "<p>" + trabalhos[i].descricao + "</p>" +
                "<span class='selo-completo'>✓ Completo</span>" +
                "</article>";
        } else {
            html = html +
                "<article class='trabalho'>" +
                "<div class='medalhao'>" + trabalhos[i].numero + "</div>" +
                "<h3>" + trabalhos[i].nome + "</h3>" +
                "<p>" + trabalhos[i].descricao + "</p>" +
                "<p class='texto-progresso'>Falta completar</p>" +
                "</article>";
        }
    }

    lista_trabalhos.innerHTML = html;
}

validarSessao();
buscarTrabalhos();
