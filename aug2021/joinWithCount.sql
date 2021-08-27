SELECT people.*, count(toys.name) toy_count JOIN toys ON people.id = toys.people_id GROUP BY people.id;


SELECT p.*, COUNT(t) AS toy_count
FROM people p
JOIN toys t
  ON t.people_id = p.id
GROUP BY p.id