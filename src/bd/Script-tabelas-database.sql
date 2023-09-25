CREATE TABLE Users(
	id unique,
	Email varchar(255), 
	Nome varchar(255),
	Idade varchar(255),
	Altura varchar(255),
	Peso varchar(255)
);

CREATE TABLE Meta(
	id unique,
	Nome varchar(255), 
	Peso varchar(255),
	Qty proteína varchar(255),
	Qty carboidrato varchar(255),
	Qty caloria varchar(255),
	BF varchar(255)
);


CREATE TABLE Diario(
	id unique,
	Data varchar(255),
	Nome varchar(255), 
	Peso varchar(255),
	Qty proteína varchar(255),
	Qty carboidrato varchar(255),
	Qty caloria varchar(255),
	indice proteína varchar(255),
    	indice carboidrato varchar(255)
);



CREATE TABLE Alimento(
	id unique,
	Proteína varchar(255),
	Carboidrato varchar(255),
	Caloria varchar(255),
	Gorduras totais varchar(255),
);
