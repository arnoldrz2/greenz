CREATE DATABASE greenz_db;
USE greenz_db;

CREATE TABLE users
(
	id INT NOT NULL AUTO_INCREMENT,
	username VARCHAR(255) NOT NULL,
	favorite_strain VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE top_strains
(
	id INT NOT NULL AUTO_INCREMENT,
	strain VARCHAR(255) NOT NULL,
	score INT(10),
	PRIMARY KEY (id)
);