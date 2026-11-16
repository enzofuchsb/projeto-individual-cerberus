USE cerberus;

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

SELECT ROUND(acertos * 100 / total) AS porcentagem
  FROM tentativa_quiz
 WHERE fk_usuario = 1
 ORDER BY id DESC
 LIMIT 10;
