-- Lists the number of  with the same score in the table second_table, records are ordered by descending count.
SELECT score, COUNT(*) AS number
FROM second_table
GROUP BY score
ORDER BY number DESC;
