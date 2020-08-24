DROP DATABASE IF EXISTS seinfeld_db;

CREATE DATABASE seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors (
    id INT AUTO_INCREMEMT NOT NULL PRIMARY KEY,
    actor_name VARCHAR(30) NOT NULL,
    coolness INT NOT NULL,
    attitude VARCHAR(30) NOT NULL
);

INSERT INTO actors (actor_name, coolness, attitude) 
VALUES 
("Seinfeld", 90, "relaxed");

INSERT INTO actors (actor_name, coolness, attitude) 
VALUES 
("Elaine", 80, "righteous");

INSERT INTO actors (actor_name, coolness, attitude) 
VALUES 
("Kramer", 20, "stressful");

INSERT INTO actors (actor_name, coolness, attitude) 
VALUES 
("George", 10, "selfish");