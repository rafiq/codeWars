SELECT DISTINCT TOP 10
    customer_id,email,payments,total_amount
FROM



SELECT
  c.customer_id,
  c.email,
  COUNT(p.amount) AS payments_count,
  SUM(p.amount)::FLOAT AS total_amount
FROM payment AS p
INNER JOIN customer AS c ON c.customer_id = p.customer_id
GROUP BY c.customer_id
ORDER BY total_amount DESC
LIMIT 10;