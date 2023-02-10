CREATE DATABASE mytasks;

CREATE TABLE tasks (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100),
  content VARCHAR(100),
  PRIMARY KEY (id)
);

INSERT INTO tasks VALUES(1, 'Meu primeiro título', 'Eita, meu primeiro conteúdo');

INSERT INTO tasks VALUES(2, 'Meu segundo título', 'Nossa, meu segundo conteúdo');

