SELECT name, weight, price, ROUND( price / weight, 2)  price_per_kg
FROM products
ORDER BY price_per_kg ASC
ORDER BY name ASC;

SELECT name, weight, price, ROUND((price * 1000 / weight )::numeric, 2)::float AS price_per_kg
FROM products
ORDER BY price_per_kg, name