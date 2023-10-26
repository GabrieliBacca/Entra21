CREATE DATABASE SPOTIFY;

USE spotify;

CREATE TABLE musica(
	Id_Musica INTEGER PRIMARY KEY,
    Titulo VARCHAR(30),
    Genero VARCHAR(20),
    Artista VARCHAR(20),
    Ano_Lancamento YEAR
);

INSERT INTO musica VALUES (1, 'Style', 'Pop', 'Taylor Swift', 2014);

INSERT INTO musica VALUES (2, 'Wildest Dreams', 'Pop', 'Taylor Swift', 2014), (3, 'Exile', 'Pop', 'Taylor Swift', 2015), 
(4, 'Zoio de Lua', 'Rock', 'Charlie Brown', 1999), (5, 'Ceu Azul', 'Rock', 'Charlie Brown', 2012), 
(6, 'Vicios e Virtudes', 'Rock', 'Charlie Brown', 2003), (7, 'A Cera', 'Rock', 'O surto', 2000), 
(8, 'Meio Termo', 'Setanejo', 'Luan Santana', 2022), (9, 'Seu brilho sumiu', 'Setanejo', 'Mari Fernandes', 2023),
(10, 'To bebendo demais', 'Bandinha', 'Tche Chaleira', 2017);

SELECT titulo FROM musica WHERE artista = 'Taylor Swift';

SELECT artista FROM musica WHERE genero = 'Rock';

SELECT genero FROM musica WHERE artista = 'Mari Fernandes';

SELECT titulo FROM musica WHERE ano_lancamento = 2014;
