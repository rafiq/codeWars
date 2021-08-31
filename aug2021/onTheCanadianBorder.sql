-- SELECT
-- *
-- FROM
-- travelers
-- WHERE
-- country <> (USA, Mexico, Canada);

-- SELECT name, country FROM travelers WHERE country NOT IN ('Canada', 'Mexico', 'USA')
SELECT
  *
FROM
  TRAVELERS
WHERE
  COUNTRY NOT IN ('Mexico', 'USA', 'Canada')