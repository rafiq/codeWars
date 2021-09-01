SELECT
    player_name, games, (ROUND(hits / at_bats),3) batting_average
FROM
    yankees
WHERE at_bats > 100;