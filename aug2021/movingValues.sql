

SELECT char_length(name) id, char_length(char(legs)) name, char_length(char(arms)) legs, char_length(characteristics) arms, char_length(char(id)) characteristics
FROM monsters;

SELECT
  length(name) AS id,
  length(legs::text) AS name,
  length(arms::text) AS legs,
  length(characteristics) AS arms,
  length(id::text) AS characteristics
FROM
  monsters