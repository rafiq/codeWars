-- SELECT
--     *
-- FROM
--     departments d
-- JOIN sales s ON s.departments.id = d.id
-- WHERE price > 98;

SELECT *
  FROM departments d
  WHERE d.id IN (
      SELECT s.department_id
        FROM sales s
          WHERE s.price > 98.00
  )


SELECT *
FROM departments
WHERE id IN
  (SELECT department_id FROM sales WHERE price > 98)
