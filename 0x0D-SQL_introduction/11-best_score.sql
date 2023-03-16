--a script that list all record given a cobdition that score >= 10.
SELECT score, name
FROM second_school
WHERE score >= 10
ORDER BY score DESC;
