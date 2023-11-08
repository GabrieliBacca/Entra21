create database hospital;

use hospital;

create table medico(
	medico_id int primary key,
    nome_medico varchar(50)
);

create table paciente(
	paciente_id int primary key,
    nome_paciente varchar(50)
);

create table consultas (
	id int primary key,
    data_consulta date,
    medico_id int,
    foreign key (medico_id) references medico(medico_id),
    -- outra forma
    paciente_id  int references paciente(paciente_id)
);
