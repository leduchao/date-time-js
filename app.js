setInterval(() => {
  let time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let dayOrNight = 'AM';

  if (hours > 12) {
    hours -= 12;
    dayOrNight = 'PM';
  }

  if (hours == 0) {
    hours = 12;
    dayOrNight = 'AM';
  }

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const option = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }

  let today = time.toLocaleDateString('en-US', option);

  let timeText = document.querySelector('#time');
  let dateText = document.querySelector('#date');

  timeText.textContent = hours + ' : ' + minutes + ' : ' + seconds + ' ' + dayOrNight;
  dateText.textContent = today;
}, 1000);

