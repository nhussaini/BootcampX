-- Get important data about each assistance request.

-- Select the teacher's name, student's name, assignment's name, and the duration of each assistance request.
-- Subtract completed_at by started_at to find the duration.
-- Order by the duration of the request.

SELECT teachers.name as teacher_name, students.name as student_name, assignments.name as assignments_name, (completed_at - started_at) as duration
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id 
JOIN students ON student_id = students.id
JOIN assignments ON assignment_id = assignments.id
ORDER BY duration;
