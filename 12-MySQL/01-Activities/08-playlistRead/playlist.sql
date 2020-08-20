DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50),
    artist VARCHAR(50),
    genre VARCHAR(50),
    PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Photograph", "Nickelback", "Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Blinding Lights", "Weekend", "Pop");

INSERT INTO songs (title, artist, genre)
VALUES ("Leaves from the Vine", "Uncle Iroh", "Nostalgia");

SELECT * FROM songs;
