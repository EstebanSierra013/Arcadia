DROP DATABASE IF EXISTS arcadiaDB ;
CREATE DATABASE arcadiaDB;
USE arcadiaDB;

CREATE TABLE rol
(
	rol_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    rol_name VARCHAR(20) NOT NULL
);

CREATE TABLE user
(
	username VARCHAR(50) NOT NULL PRIMARY KEY UNIQUE,
    password VARCHAR(25) NOT NULL,
    name VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    rol INT NOT NULL,
    FOREIGN KEY (rol) REFERENCES rol(rol_id)
);

CREATE TABLE image
(
	image_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    image_path VARCHAR(50)
);

CREATE TABLE animal
(
	animal_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(35) NOT NULL,
    species VARCHAR(25) NOT NULL,
    habitat_id INT NOT NULL,
    image_id INT NULL,
    status VARCHAR(10) NULL,
    FOREIGN KEY (image_id) REFERENCES image(image_id)
);

CREATE TABLE employer_report
(
	employer_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date DATETIME NOT NULL,
    food  VARCHAR(25) NOT NULL,
	quantity FLOAT NOT NULL,
	created_by VARCHAR(50) NOT NULL,
    animal_id INT NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES animal(animal_id),
    FOREIGN KEY (created_by) REFERENCES user(username)
);

CREATE TABLE veterinary_report
(
	veterinary_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date DATE NOT NULL,
    status INT(1) NOT NULL,
    food  VARCHAR(25) NOT NULL,
	quantity FLOAT NOT NULL,
	created_by VARCHAR(50) NOT NULL,
    animal_id INT,
    FOREIGN KEY (animal_id) REFERENCES animal(animal_id),
    FOREIGN KEY (created_by) REFERENCES user(username)
);

CREATE TABLE habitat
(
	habitat_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    description TEXT NOT NULL,
    habitat_comment VARCHAR(50),
    image_id INT NULL,
    FOREIGN KEY (image_id) REFERENCES image(image_id)
);

CREATE TABLE service
(
	service_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    schedule TIME NULL,
    duration INT NULL,
    image_id INT NOT NULL,
    FOREIGN KEY (image_id) REFERENCES image(image_id)
);

CREATE TABLE review
(
	review_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    pseudo VARCHAR(50) NOT NULL,
    comment VARCHAR(250) NOT NULL,
    isVisible BOOL DEFAULT FALSE
);

CREATE TABLE contact
(
	contact_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    mail VARCHAR(50) NOT NULL,
    title VARCHAR(25) NOT NULL,
    description VARCHAR(250) NOT NULL,
    isReplied BOOL DEFAULT FALSE
);




