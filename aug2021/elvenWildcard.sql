-- SELECT
--     concat(firstname LIKE '%tegil%' OR lastname LIKE '%astar%')
-- FROM
--     Elves

SELECT INITCAP(CONCAT(firstname, ' ', lastname)) AS shortlist
  -- this is a bad DB design: table names should be in singular !
  FROM elves
  WHERE firstname LIKE '%tegil%'
    OR lastname LIKE '%astar%'