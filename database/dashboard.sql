-- ===== CONSULTAS DA DASHBOARD (PERFIL) =====
-- Rode o script.sql antes.
-- São as mesmas consultas que a API usa (src/models/jornadaModel.js).
-- Troque o 1 por 2 para ver o outro usuário.
USE cerberus;


-- ----- TUDO DO PERFIL EM UMA LINHA SÓ -----
-- cada (SELECT ...) é uma pergunta pequena ao banco, e a resposta vira uma coluna
SELECT nome, patrono,
       pontos_zeus, pontos_poseidon, pontos_hades, pontos_atena, pontos_ares, pontos_apolo,
       (SELECT COUNT(*) FROM tentativa_quiz WHERE fk_usuario = 1) AS quizzes,
       (SELECT ROUND(AVG(acertos * 100 / total)) FROM tentativa_quiz WHERE fk_usuario = 1) AS media,
       (SELECT ROUND(MAX(acertos * 100 / total)) FROM tentativa_quiz WHERE fk_usuario = 1) AS melhor,
       (SELECT SUM(acertos) FROM tentativa_quiz WHERE fk_usuario = 1) AS acertos,
       (SELECT SUM(total - acertos) FROM tentativa_quiz WHERE fk_usuario = 1) AS erros,
       (SELECT COUNT(*) FROM tentativa_quiz WHERE fk_usuario = 1 AND acertos = total) AS notasMaximas,
       (SELECT COUNT(DISTINCT categoria) FROM tentativa_quiz WHERE fk_usuario = 1) AS categorias,
       (SELECT COUNT(*) FROM leitura_historia WHERE fk_usuario = 1) AS historias
  FROM usuario
 WHERE id = 1;


-- ----- GRÁFICO DE LINHA: últimos 10 quizzes -----
-- vem do mais novo para o mais antigo; o JS lê de trás para frente
SELECT ROUND(acertos * 100 / total) AS porcentagem
  FROM tentativa_quiz
 WHERE fk_usuario = 1
 ORDER BY id DESC
 LIMIT 10;
