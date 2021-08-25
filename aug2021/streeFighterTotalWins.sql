SELECT name, sum(won) won, sum(lost) lost FROM fighters WHERE winning_moves NOT IN ('Hadoken', 'Shouoken', 'kikoken') GROUP BY fighters.name ORDER BY won DESC LIMIT 6;


SELECT name, sum(won) as won, sum(lost) as lost FROM fighters
INNER JOIN winning_moves ON fighters.move_id=winning_moves.id
WHERE NOT move IN ('Hadoken', 'Shouoken', 'Kikoken')
GROUP BY name
ORDER by won DESC
LIMIT 6;