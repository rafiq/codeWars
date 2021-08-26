SELECT
    capital
FROM
    countries
WHERE
    country LIKE 'E%' AND continent IN ('Africa','Afrika')
ORDER BY
    capital
LIMIT 3;


SELECT capital
FROM countries
WHERE continent IN ('Africa', 'Afrika')
  AND country LIKE 'E%'
ORDER BY capital
LIMIT 3