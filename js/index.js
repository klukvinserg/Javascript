let message = 'Hello JavaScript';
alert(message);
message = 'Nice to see you!';
alert(message);

let userAge = parseInt(prompt('Enter your age'));
alert('Your age is ' + userAge);

const nextAge = userAge + 1;
alert('Age next year= ' + nextAge);

// if (userAge >= 18 && userAge < 65) {
  // alert('Your are adult'); {

 //  }
// } else if (userAge >=65 ){
   // alert('You are kids');
// }

function addOne(value) {
    const newValue = value +1;
    return newValue;
}