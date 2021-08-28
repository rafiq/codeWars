SELECT
    id, name, quality1, quality2
FROM
    students
WHERE
    ((quality1 IN ('evil','cunning') AND quality2 IN ('evil','cunning'))
    (quality1 = 'brave' AND quality2 NOT IN ('evil'))
    (quality1 IN ('studious', 'intelligent') OR quality2 IN ('studious', 'intelligent'))
    (quality1 IN ('hufflepuff') OR quality2 IN ('hufflepuff')))
ORDER BY
    id ASC;



SELECT *
FROM students
WHERE quality1 = 'evil' AND quality2 = 'cunning' OR
      quality1 = 'brave' AND quality2 <> 'evil' OR
      quality1 in ('studious', 'hufflepuff') OR
      quality2 in ('intelligent', 'hufflepuff')
ORDER BY id;