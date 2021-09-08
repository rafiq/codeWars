-- SELECT race, count(race) count FROM demographics ORDER BY count DESC;
SELECT race, COUNT(race)
FROM demographics
GROUP BY race
ORDER BY Count(race) desc