-- SELECT
--     count(age) age, sum(age)
-- FROM
--     people
-- HAVING
--     age > 10 total_people
-- GROUP BY
--     age;

SELECT age AS age,
  count(id) AS total_people
FROM people
GROUP BY age
HAVING count(id) >= 10;