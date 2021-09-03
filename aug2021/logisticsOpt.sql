-- SELECT producer, COUNT(SELECT * FROM products WHERE )  count_product_type

SELECT
  COUNT(producer) AS count_products_types,
  producer
FROM
  products
GROUP BY
  producer
ORDER BY
  COUNT(producer) DESC,
  producer ASC