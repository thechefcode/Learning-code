// HTML Elements
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const secondHand = document.querySelector('.second_hand');
const minuteHand = document.querySelector('.minute_hand');
const hourHand = document.querySelector('.hour_hand');

// Get the current time
const myDate = new Date
hours.innerHTML = myDate.getHours();
minutes.innerHTML = myDate.getMinutes();
seconds.innerHTML = myDate.getSeconds();

let currentMinute = myDate.getMinutes() * 6 + 90;
let currentHour = myDate.getHours() * 6 + 170 ;
let currentSecond = myDate.getSeconds() * 6 + 90;

// The main clock functioning
let set = setInterval(clock, 1000);
function clock() { 
     if (seconds.innerHTML++) {
          if (seconds.innerHTML == 45) {
               currentSecond = 360
              secondHand.style.transform = `rotateZ(${currentSecond}deg)`
          } else if ( seconds.innerHTML == 60) {
               currentSecond = 456
          } else {secondHand.style.transform = `rotateZ(${currentSecond}deg)`}
          hourHand.style.transform = `rotateZ(${currentHour}deg)`;
          minuteHand.style.transform = `rotateZ(${currentMinute}deg)`;
          currentMinute += 0.1;
          currentHour += 0.01;
          currentSecond += 6;
     }

     if (seconds.innerHTML == 60) {
          minutes.innerHTML++;
          seconds.innerHTML = 0;
     }

     if (minutes.innerHTML == 60 && seconds.innerHTML == 0) hours.innerHTML++;
}