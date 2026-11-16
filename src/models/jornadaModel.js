var database = require("../database/config");

function salvarPatrono(idUsuario, patrono, pontosZeus, pontosPoseidon, pontosHades, pontosAtena, pontosAres, pontosApolo) {
    console.log("ACESSEI O JORNADA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarPatrono():", idUsuario, patrono);
    var instrucaoSql = `
        UPDATE usuario SET patrono = '${patrono}',
            pontos_zeus = ${pontosZeus},
            pontos_poseidon = ${pontosPoseidon},
            pontos_hades = ${pontosHades},
            pontos_atena = ${pontosAtena},
            pontos_ares = ${pontosAres},
            pontos_apolo = ${pontosApolo}
        WHERE id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarTentativa(idUsuario, categoria, acertos, total) {
    console.log("ACESSEI O JORNADA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarTentativa():", idUsuario, categoria, acertos, total);
    var instrucaoSql = `
        INSERT INTO tentativa_quiz (fk_usuario, categoria, acertos, total)
        VALUES (${idUsuario}, '${categoria}', ${acertos}, ${total});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarLeitura(idUsuario, historia) {
    console.log("ACESSEI O JORNADA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarLeitura():", idUsuario, historia);
    var instrucaoSql = `
        INSERT IGNORE INTO leitura_historia (fk_usuario, historia) VALUES (${idUsuario}, '${historia}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDados(idUsuario) {
    console.log("ACESSEI O JORNADA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDados():", idUsuario);
    var instrucaoSql = `
        SELECT nome, patrono,
               pontos_zeus, pontos_poseidon, pontos_hades, pontos_atena, pontos_ares, pontos_apolo,
               (SELECT COUNT(*) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario}) AS quizzes,
               (SELECT ROUND(AVG(acertos * 100 / total)) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario}) AS media,
               (SELECT ROUND(MAX(acertos * 100 / total)) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario}) AS melhor,
               (SELECT SUM(acertos) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario}) AS acertos,
               (SELECT SUM(total - acertos) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario}) AS erros,
               (SELECT COUNT(*) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario} AND acertos = total) AS notasMaximas,
               (SELECT COUNT(DISTINCT categoria) FROM tentativa_quiz WHERE fk_usuario = ${idUsuario}) AS categorias,
               (SELECT COUNT(*) FROM leitura_historia WHERE fk_usuario = ${idUsuario}) AS historias
          FROM usuario
         WHERE id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEvolucao(idUsuario) {
    console.log("ACESSEI O JORNADA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarEvolucao():", idUsuario);
    var instrucaoSql = `
        SELECT ROUND(acertos * 100 / total) AS porcentagem
          FROM tentativa_quiz
         WHERE fk_usuario = ${idUsuario}
         ORDER BY id DESC
         LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarPatrono,
    registrarTentativa,
    registrarLeitura,
    buscarDados,
    buscarEvolucao
};
