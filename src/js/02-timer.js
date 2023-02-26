import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

      selectedDates[0].getTime() <= Date.now() ? Notiflix.Notify.failure('Please choose a date in the future') : refs.start.removeAttribute('disabled');

    },
  };

const refs = {
    start: document.querySelector('[data-start]'),
    input: document.querySelector('#datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    timer: document.querySelector('.timer'),
    value: document.querySelectorAll('.value'),
   
};

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  };
  
  // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  flatpickr("#datetime-picker", options);


  const timer = {
    intervalId: null,

    start() {
      const startTime = new Date(refs.input.value).getTime();
      refs.start.setAttribute('disabled', 'disabled');

      this.intervalId = setInterval(() => {
       const currentTime = Date.now();
       const differenceTime = startTime - currentTime;
       const timeComponents = convertMs(differenceTime);
       updateClockFace(timeComponents);
      
       if(differenceTime <= 0) {
        Notiflix.Notify.success('The countdown is over');
        clearInterval(this.intervalId);
        refs.value[0].textContent = '00';
        refs.value[1].textContent = '00';
        refs.value[2].textContent = '00';
        refs.value[3].textContent = '00';
       }
      }, 1000);
    },
  };

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

refs.start.setAttribute('disabled', 'disabled') 

refs.start.addEventListener('click', () => {
   timer.start();
} );

  function updateClockFace({ days, hours, minutes, seconds }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;

  }

