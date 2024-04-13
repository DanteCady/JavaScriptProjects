// User's name
var userName = ''
// Question user would like to ask
var userQuestion = ''
// Random number for 8-ball
var randomNumber = Math.floor(Math.random()*8)
// 8-ball variable
var eightBall = ''
console.log(eightBall)
switch (randomNumber) {
  case 0:
   eightBall = 'It is certain'
  break;
  case 1:
   eightBall = 'It is decidedly so'
  break;
  case 2:
  eightBall = 'Reply hazy try again'
  break;
  case 3:
  eightBall = 'Cannot predict now'
  break;
  case 4:
   eightBall = 'Do not count on it'
  break;
  case 5:
   eightBall = 'My sources say no'
  break;
  case 6:
   eightBall = 'Outlook not so good'
  break;
  case 7:
   eightBall = 'Signs point to yes'
  break;
  
};

// Expression to decide if user provides name or not
userName === 'Jane'
? console.log('Hello, User!')
: console.log('Hello!')
// Console output of users's question
console.log(`${userName} asked: '${userQuestion}?'`)
// Console output of eightball response
console.log(eightBall)
