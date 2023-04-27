CREATE DATABASE exchangeratesapp;

CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

--fake users data

insert into users (user_name, user_email, user_password) values ('Art', 'art@gmail.com', '12345');