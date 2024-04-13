let raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly = false;
var runnerAge = 18;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000
};

if (runnerAge && registeredEarly) {
  console.log(`Your race will start at 9:30am. Your race number is ${raceNumber}`)
} else if (runnerAge > 18 && registeredEarly === false){
  console.log(`Your race will start at 11:00am. Your race number is ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`Your race will start at 12:30pm. Your race number is ${raceNumber}`)
} else (runnerAge = 18) 
  console.log('Please see the front desk for further assistance');
