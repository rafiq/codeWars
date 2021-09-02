-- SELECT
--
SELECT p.*, COUNT(s.people_id) sale_count, SUM(s.price) sale_rank
FROM people p
JOIN sales s ON s.people_id=p.id
GROUP BY s.people_id, p.id
ORDER BY sale_rank