import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    },delay);
  });
}


refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const delayInput = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);

  for ( let i = 0; i < amount; i +=1) {
    const position = i+1;
    const delay = delayInput + step*i;

    createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
});