-- SELECT
--     id, name,POSITION(',' in characteristics) comma
-- FROM
--     monsters;
-- ORDER BY
--     comma ASC;
SELECT id, name, POSITION(',' in characteristics) as comma FROM monsters
ORDER BY comma ASC;