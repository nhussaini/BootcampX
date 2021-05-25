SELECT day, count(*) as total_assignments
FROM assignments
group BY day
HAVING count(*) >= 10
ORDER BY day;