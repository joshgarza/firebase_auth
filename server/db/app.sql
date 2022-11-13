-- Connect to DB and create schema
CREATE DATABASE IF NOT EXISTS trainer;
\c trainer;

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  firebase_id VARCHAR(40) NOT NULL,
  email VARCHAR(320) NOT NULL,
  user_type VARCHAR(25) NOT NULL
);