//Write if-else statements to fulfill the following conditions:
//if score morethan 60 you pass otherwise you failed

function testScore(num) {
  if (num > 60){
      console.log(`PASS`);
  } else if (num < 60){
      console.log(`FAILED`)
  }
}

console.log(testScore(50));
console.log(testScore(90));

//testScore(50) should return "Failed"
//testScore(90) should return "Passed"