create database locadora;

use locadora;

create table filme(
	id_filme integer primary key auto_increment,
    nome_filme varchar(60),
    genero varchar(50),
    ano_lancamento year,
    diretor varchar(50)
);

insert into filme (nome_filme, genero, ano_lancamento, diretor) values 
('A freira', 'terror', 1986, 'Steven Spielberg'), 
('It - A coisa', 'terror', 1980, 'Steven Spielberg'),
('Os trapalhoes', 'comedia', 1986, 'Lucia Santos'), 
('Uma quase dupla', 'comedia', 2019, 'Gloria Perrez');

update filme set nome_filme = 'Rua do medo' where id_filme = 2;

select * from filme;

select * from filme where diretor like '%s%';

select * from filme where ano_lancamento < 1990;

delete from filme where id_filme = 3;

update filme set genero= 'aventura' where id_filme = 2;

select * from filme where diretor = 'Steven Spielberg' and genero= 'terror' ;

select nome_filme from filme where genero = 'comedia';

update filme set nome_filme = 'Patetas' where id_filme = 4;

alter table filme add duracao int;

update filme set duracao = 90 where id_filme = 1;

update filme set duracao = 120 where id_filme = 2;

update filme set duracao = 120 where id_filme = 4;

select duracao from filme;

select avg(duracao) as media from filme;








