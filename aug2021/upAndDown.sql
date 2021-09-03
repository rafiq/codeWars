SELECT
    CASE WHEN sum(number1) % 2 = 0
    THEN MIN(number1) number1
    ELSE MAX(number1) number1
FROM
    numbers


SELECT
  CASE WHEN(sum(number1)%2=0) THEN max(number1) ELSE min(number1) END as number1,
  CASE WHEN(sum(number2)%2=0) THEN max(number2) ELSE min(number2) END as number2
FROM numbers