Use msis;

CREATE TABLE Comments (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    commentText TEXT NOT NULL
);


INSERT INTO Comments (id, commentText)
VALUES (1, 'I something important to say');


INSERT INTO Comments (id, commentText)
VALUES (2, 'D&S is awesome');


INSERT INTO Comments (id, commentText)
VALUES (3, ':)');
