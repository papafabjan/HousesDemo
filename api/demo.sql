CREATE DATABASE demo;
USE demo;

CREATE TABLE houses (
    house_id SERIAL PRIMARY KEY,
    id VARCHAR(255),
    name VARCHAR(255),
    housecolours VARCHAR(255),
    founder VARCHAR(255),
    animal VARCHAR(255),
    element VARCHAR(255),
    ghost VARCHAR(255),
    commonRoom VARCHAR(255)
);



INSERT INTO houses (id, name, housecolours, founder, animal, element, ghost, commonRoom)
VALUES
    ('0367baf3-1cb6-4baf-bede-48e17e1cd005', 'Gryffindor', 'Scarlet and gold', 'Godric Gryffindor', 'Lion', 'Fire', 'Nearly-Headless Nick', 'Gryffindor Tower'),
    ('805fd37a-65ae-4fe5-b336-d767b8b7c73a', 'Ravenclaw', 'Blue and bronze', 'Rowena Ravenclaw', 'Eagle', 'Air', 'Grey Lady', 'Ravenclaw Tower'),
    ('85af6295-fd01-4170-a10b-963dd51dce14', 'Hufflepuff', 'Yellow and black', 'Helga Hufflepuff', 'Badger', 'Earth', 'Fat Friar', 'Hufflepuff Basement'),
    ('a9704c47-f92e-40a4-8771-ed1899c9b9c1', 'Slytherin', 'Green and silver', 'Salazar Slytherin', 'Serpent', 'Water', 'Bloody Baron', 'Slytherin Dungeon');
