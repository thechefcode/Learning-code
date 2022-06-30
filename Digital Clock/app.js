const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

const myDate = new Date
hours.innerHTML = myDate.getHours()
minutes.innerHTML = myDate.getMinutes()
seconds.innerHTML = myDate.getSeconds()

let set = setInterval(blur, 1000)
function blur() {
     seconds.innerHTML++;
     if (seconds.innerHTML === 6) {
      seconds.innerHTML = '00';
      minutes.innerHTML++
     }
}