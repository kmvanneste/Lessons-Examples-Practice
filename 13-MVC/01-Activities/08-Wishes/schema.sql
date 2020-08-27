-- Drop database
DROP DATABASE IF EXISTS wishes_db;
-- create database
CREATE DATABASE wishes_db;
-- Use database
USE wishes_db;
-- create a table
CREATE TABLE wishes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    wish VARCHAR(150) NOT NULL
);