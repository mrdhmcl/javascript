let grade = 40

function transformGrade(grade){
  if (grade >= 90 && grade <= 100) {
    console.log('Congratulations! Your score is A!')
  } else if (grade >= 80 && grade <= 89) {
    console.log('Congratulations! Your score is B!')
  } else if (grade >= 70 && grade <= 79) {
    console.log('Your score is C.')
  } else if (grade >= 60 && grade <= 69) {
    console.log('Your score is D. Good luck next time.')
  } else if (grade < 60 && grade >= 0) {
    console.log('Your score is F. Study harder next time.')
  } else {
    console.log('Invalid score')
  }
}

transformGrade(-10)