SELECT
  DISTINCT j.job_title job_title,
  SUM(j.salary) / COUNT(p.*::FLOAT 2 as average_salary,
  COUNT(p.id) as total_people,
  SUM(j.salary)::FLOAT 2 as total_salary
  FROM people p
    JOIN job j ON p.id = j.people_id
  GROUP BY j.job_title
  ORDER BY average_salary DESC;



SELECT
  j.job_title,
  ROUND(AVG(j.salary),2)::FLOAT as average_salary,
  COUNT(p.id) as total_people,
  ROUND(SUM(j.salary),2)::FLOAT as total_salary
  FROM people AS p
    JOIN job AS j ON p.id = j.people_id
  GROUP BY j.job_title
  ORDER BY average_salary DESC