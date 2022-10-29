'use strict';
console.log('Hello from the JS Cafe app!');

function getPartyName(){
  let partyName = prompt('What is your party name?');
  console.log('Party Name is:'+ partyName);
  console.log('Party Name data type:', typeof(partyName));
}

function getReservationTime(){
  let reserveTime = prompt('What time will your party arrive?');
  console.log('Party will arrive at:' + reserveTime);
  console.log('Reservation Time data type:', typeof(reserveTime));
}

// function getMessage(){
//   let message = '';
//   let confirmation = prompt('Enter your party.');
//   if (confirmation = 'Rissman'){
//     message = 'Your reservation is confirmed';
// } else {
//   message = 'Try again';
// }
// return message;
// }

function getRating() {
  let output = '';
  let rating = prompt('How was your experience on a scale of 1-5?');
  //for loop
  for(let i = 0; i <= rating; i++){
    output += '<img  src=\'images/good.png\'  />';
  }
  return document.write(output);
}


