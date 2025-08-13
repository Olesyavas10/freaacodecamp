function getAverage(scores) {
let average=scores.reduce((acc,num)=>acc+num, 0)/scores.length
return average
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score) {
  if (score === 100) return "A++";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
function hasPassingGrade(score) {
  if (getGrade(score)=="F") return false
  else return true
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

function studentMsg(totalScores, studentScore) {
  if (studentScore>=60){
return 'Class average: '+`${getAverage(totalScores)}`+'. Your grade: '+`${getGrade(studentScore)}`+'. You passed the course.'
  }
  else {
    return 'Class average: '+`${getAverage(totalScores)}`+'. Your grade: '+`${getGrade(studentScore)}`+'. You failed the course.'
  }

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));