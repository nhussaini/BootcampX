// to connect postgres with javascript files 
// we installed a package called pg (node-postgres) by running npm install pg

// step 0 - require 
const { Pool } = require('pg');

// to add a pass to a user... ( example )
// ALTER USER development with PASSWORD 'development';
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
// to see if we actually connected to the server
// we are going to run an optional command called connect()

pool.connect().then(() => {
}).catch(e => {
  console.log('--------------- ERROR -----------');
  console.log(e);
})

const arg = process.argv.slice(2);
console.log(arg);


pool.query(`
SELECT teachers.name as teacher, cohorts.name as cohort
FROM teachers 
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = '${arg[0]}'
GROUP BY teacher, cohort
ORDER BY teachers.name;
`)
.then(res => {
  res.rows.forEach(teacherCohort =>{
   console.log(`${teacherCohort.cohort}: ${teacherCohort.teacher}`);
  }); 
})
.catch(err => console.error('query error', err.stack));