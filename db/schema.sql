CREATE DATABASE greenz_db;
USE greenz_db;

CREATE TABLE users
(
	id INT NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(255) NOT NULL,
	user_email VARCHAR(255),
	user_birth DATE,
	user_favorite_strain VARCHAR(255),
	PRIMARY KEY (id)
);
