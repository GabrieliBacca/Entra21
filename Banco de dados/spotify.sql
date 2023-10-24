CREATE DATABASE SPOTIFY;

USE spotify;

CREATE TABLE musica(
	Id_Musica INTEGER PRIMARY KEY,
    Titulo VARCHAR(30),
    Genero VARCHAR(20),
    Artista VARCHAR(20),
    Ano_Lancamento YEAR
);

