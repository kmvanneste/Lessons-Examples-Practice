DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100) NOT NULL,
  song VARCHAR(100),
  year INT NULL,
  raw_total DECIMAL(10, 4) NULL,
  raw_usa DECIMAL (10, 4) NULL,
  raw_uk DECIMAL (10, 4) NULL,
  raw_eur DECIMAL (10, 4) NULL,
  raw_row DECIMAL(10, 4) NULL
  primary key (position)
);

SELECT * FROM top5000;

