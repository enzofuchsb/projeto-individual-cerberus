function buscarDados() {
    fetch("/jornada/buscarDados/" + sessionStorage.ID_USUARIO, { cache: "no-store" }).then(function (resposta) {
        if (resposta.status == 200) {
            resposta.json().then(function (dados) {
                console.log("Dados recebidos: ", JSON.stringify(dados));

                mostrarCabecalho(dados);
                mostrarNumeros(dados);
                mostrarRadar(dados);
                mostrarRosca(dados);
            });
        } else {
            console.error("Nenhum dado encontrado ou erro na API");
        }
    }).catch(function (erro) {
        console.error("Erro na obtenção dos dados do perfil: " + erro.message);
    });
}

function buscarEvolucao() {
    fetch("/jornada/buscarEvolucao/" + sessionStorage.ID_USUARIO, { cache: "no-store" }).then(function (resposta) {
        if (resposta.status == 200) {
            resposta.json().then(function (tentativas) {
                console.log("Dados recebidos: ", JSON.stringify(tentativas));

                mostrarLinha(tentativas);
            });
        } else {
            console.error("Nenhum dado encontrado ou erro na API");
        }
    }).catch(function (erro) {
        console.error("Erro na obtenção dos dados do gráfico: " + erro.message);
    });
}

function mostrarCabecalho(dados) {
    var trabalhos = montarTrabalhos(dados);
    var completos = contarCompletos(trabalhos);
    var nivel = descobrirNivel(completos);

    avatar.innerHTML = montarAvatar(dados.patrono);
    titulo_usuario.innerHTML = titulos[nivel];
    texto_historias.innerHTML = dados.historias + " de " + totalHistorias + " histórias do Arquivo lidas";

    barra_titulo.style.width = completos / 12 * 100 + "%";
    texto_titulo.innerHTML = completos + " de 12 trabalhos completos";

    var html = "";

    for (var i = 0; i < trabalhos.length; i++) {
        if (trabalhos[i].atual >= trabalhos[i].meta) {
            html = html + "<span class='mini-completo'>" + trabalhos[i].numero + "</span>";
        } else {
            html = html + "<span>" + trabalhos[i].numero + "</span>";
        }
    }

    mini_trabalhos.innerHTML = html;
    lista_quizzes.innerHTML = montarCartoesQuizzes(nivel, dados.patrono);
}

function mostrarNumeros(dados) {
    kpi_quizzes.innerHTML = dados.quizzes;
    kpi_historias.innerHTML = dados.historias;

    if (dados.quizzes > 0) {
        kpi_media.innerHTML = dados.media + "%";
        kpi_melhor.innerHTML = dados.melhor + "%";
    }
}

function mostrarRadar(dados) {
    if (dados.patrono == null) {
        area_radar.style.display = "none";
        convite_teste.style.display = "flex";
        return;
    }

    var dadosGrafico = {
        labels: ["Zeus", "Poseidon", "Hades", "Atena", "Ares", "Apolo"],
        datasets: [{
            label: "Pontos",
            data: [
                dados.pontos_zeus,
                dados.pontos_poseidon,
                dados.pontos_hades,
                dados.pontos_atena,
                dados.pontos_ares,
                dados.pontos_apolo
            ],
            borderColor: "#c8693a",
            backgroundColor: "#c8693a44"
        }]
    };

    var config = {
        type: "radar",
        data: dadosGrafico,
        options: {
            maintainAspectRatio: false
        }
    };

    var graficoRadar = new Chart(document.getElementById("grafico_radar"), config);
}

function mostrarRosca(dados) {
    if (dados.quizzes == 0) {
        eixo_rosca.innerHTML = "Termine um quiz para ver seus acertos aqui.";
        return;
    }

    var dadosGrafico = {
        labels: ["Acertos", "Erros"],
        datasets: [{
            data: [dados.acertos, dados.erros],
            backgroundColor: ["#c8693a", "#121417"]
        }]
    };

    var config = {
        type: "doughnut",
        data: dadosGrafico,
        options: {
            maintainAspectRatio: false
        }
    };

    var graficoRosca = new Chart(document.getElementById("grafico_rosca"), config);
}

function mostrarLinha(tentativas) {
    if (tentativas.length == 0) {
        eixo_linha.innerHTML = "Seus quizzes vão aparecer aqui.";
        return;
    }

    var labels = [];
    var porcentagens = [];
    var numero = 1;

    for (var i = tentativas.length - 1; i >= 0; i--) {
        labels.push("Quiz " + numero);
        porcentagens.push(tentativas[i].porcentagem);
        numero = numero + 1;
    }

    var dadosGrafico = {
        labels: labels,
        datasets: [{
            label: "% de acerto",
            data: porcentagens,
            borderColor: "#c8693a",
            backgroundColor: "#c8693a"
        }]
    };

    var config = {
        type: "line",
        data: dadosGrafico,
        options: {
            maintainAspectRatio: false
        }
    };

    var graficoLinha = new Chart(document.getElementById("grafico_linha"), config);
}

validarSessao();
nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;
buscarDados();
buscarEvolucao();
