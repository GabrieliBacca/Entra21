create database animeDB;

use animeDB;
create table anime(
	id int primary key auto_increment,
    titulo varchar(50),
    qtdEpisodios int,
    genero varchar(30)
);

insert into anime values(101, 'Naruto', 250, 'ação'), (102, 'Dragao ball', 600, 'ação'), (103, 'One piece', 1000, 'pirataria');

select * from anime;

create table personagem(
		id int primary key auto_increment,
        nome varchar(50),
        idade int
);

insert into personagem values(201, 'Naruto', 15), (202, 'Hitachi', 16)


create table LUGAR(
		id int primary key auto_increment,
        nome varchar(50),
);