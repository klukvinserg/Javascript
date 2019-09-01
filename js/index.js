let message = 'Hello JavaScript!';
alert(message);
massege = 'Nise to see you!';
alert(massege);

const userAge = parseInt(prompt('Ener your age'));
alert('Your age is ' + userAge);

const nextAge = addOne(userAge);
alert('Next year yuo will be ' + nextAge);

if (userAge >= 18 && userAge < 65) {
alert('You are adult');
} else if (userAge < 18) {
alert('Your are child');
} else {
alert('You are retired');
}

function addOne(value) {
    const newValue = value + 1;
    return newValue;
}