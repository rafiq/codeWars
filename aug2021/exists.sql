SELECT *
FROM departments
WHERE EXISTS (SELECT price FROM sales WHERE price > 98)

SELECT D.id, D.name
FROM departments AS D
WHERE EXISTS
  (SELECT *
   FROM sales AS S
   WHERE D.id = S.department_id AND S.price > 98)


   SELECT d.*
FROM departments d
WHERE EXISTS (SELECT 1 FROM sales s WHERE s.price>98 and s.department_id=d.id);