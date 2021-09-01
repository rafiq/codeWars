SELECT
    title film_title
FROM
    film f
JOIN film_actor fa
ON f.film_id = fa.film_id
JOIN actor a
ON fa.actor_id = a.actor_id
WHERE fa.actor_id = 105 AND fa.actor_id = 122
GROUP BY fa.actor_id


select title
  from film f
  join film_actor a1 on a1.film_id = f.film_id and a1.actor_id = 105
  join film_actor a2 on a2.film_id = f.film_id and a2.actor_id = 122
 order by title



SELECT f.title
FROM film f
JOIN film_actor fa on fa.film_id = f.film_id
WHERE fa.actor_id IN (105,122)
GROUP BY f.film_id
HAVING COUNT(*) = 2
ORDER BY f.title ASC