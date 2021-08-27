-- SELECT COUNT(SELECT name FROM products WHERE country IN ('United States of America', 'Canada')) products,country
-- FROM products DESC;

SELECT count(id) as products, country
FROM products
WHERE country in ('United States of America', 'Canada')
GROUP BY country
ORDER BY products desc