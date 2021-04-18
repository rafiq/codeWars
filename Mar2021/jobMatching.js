let candidate1 = { minSalary: 120000 },
    job1 = { maxSalary: 130000 },
    job2 = { job: 80000 };

function match(candidate, job) {
    if (!job["maxSalary"] || !candidate["minSalary"]) throw new Error('');
    return job["maxSalary"] >= candidate["minSalary"] * 0.9 ;

//     if (!minSalary || !maxSalary) throw new Error('')
// return minSalary*0.9<=maxSalary
  }
console.log(
    match(candidate1, job1),// true);
    match(candidate1, job2),// false);
    // match(candidate1, job3),// false);
)