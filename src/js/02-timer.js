import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

const refs = {
    start: document.querySelector('[data-start]'),
    days: document.querySelector(['data-days']),
    hours: document.querySelector(['data-hours']),
    minutes: document.querySelector(['data-minutes']),
    seconds: document.querySelector(['data-seconds']),
    timer: document.querySelector('.timer'),
    field: document.querySelectorAll('.field'),
    value: document.querySelector('.value'),
    label: document.querySelector('.label'),
};

// const field = document.querySelectorAll('.field')

// console.log(field);

refs.timer.style.display ="flex";
refs.timer.style.gap ="25px";

// const styleField = field.map((element) => {
//   console.log(element)
// }
  
//   // element.style.display ="flex",
//   // element.style.flexDirection ="column",
//   // element.style.alignItems ="center",
//   // element.style.gap ="10px",

//   );


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  flatpickr("#datetime-picker", options)