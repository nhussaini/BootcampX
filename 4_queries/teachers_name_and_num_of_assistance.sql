-- We need to know which teachers actually assisted students during any cohort, and how many assistances they did for that cohort.

SELECT teachers.name as teacher, cohorts.name as cohort, count(*) as total_assistances
FROM teachers 
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = 'JUL02'
GROUP BY teacher, cohort
ORDER BY teachers.name;