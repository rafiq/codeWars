-- SELECT
-- t.heads,b.legs,t.arms,b.tails
-- FROM
--     top_half t
-- JOIN bottom_half b
-- ON t.id = b.id
-- CASE
--     WHEN t.heads > b.arms OR t.tails > b.legs THEN ALTER TABLE INSERT INTO species 'BEAST'
--     ELSE 'WEIRDO'
-- END as species

SELECT
  th.id,
  th.heads,
  bh.legs,
  th.arms,
  bh.tails,
  CASE WHEN th.heads > th.arms or bh.tails > bh.legs
    THEN 'BEAST'
    ELSE 'WEIRDO'
  END as species

FROM top_half th

INNER JOIN bottom_half bh
  on bh.id = th.id

ORDER BY species
