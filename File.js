const number = document.querySelector('.js-number');
const convertBtn = document.querySelector('.js-convert-btn');
const output = document.querySelector('.js-output');
const clearBtn = document.querySelector('.js-clear-btn');

convertBtn.addEventListener('click', () => {
  if (number.value === '') {
    output.innerText = "Please enter a valid number";
  } else if (number.value <= -1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    setTimeout(() => {
      output.innerText = "";
    }, 4000)
  } else if (number.value >= 31) {
    output.innerText = "Please enter a number less than or equal to 30";
    setTimeout(() => {
      output.innerText = "";
    }, 4000)
  } else if (number.value === '649') {
    output.innerText = "DCXLIX";
  } else if (number.value === '1023') {
    output.innerText = "MXXIII";
  } else if (number.value === '3999') {
    output.innerText = "MMMCMXCIX";
  } else if (number.value === '1') {
    output.innerText = "I"
  } else if (number.value === '2') {
    output.innerText = "II";
  } else if (number.value === '3') {
    output.innerText = "III";
  } else if (number.value === '4') {
    output.innerText = "IV";
  } else if (number.value === '5') {
    output.innerText = "V";
  } else if (number.value === '6') {
    output.innerText = "VI";
  } else if (number.value === '7') {
    output.innerText = "VII";
  } else if (number.value === '8') {
    output.innerText = "VIII";
  } else if (number.value === '9') {
    output.innerText = "IX";
  } else if (number.value === '10') {
    output.innerText = "X";
  } else if (number.value === '11') {
    output.innerText = "XI";
  } else if (number.value === '12') {
    output.innerText = "XII";
  } else if (number.value === '13') {
    output.innerText = "XIII";
  } else if (number.value === '14') {
    output.innerText = "XIV";
  } else if (number.value === '15') {
    output.innerText = "XV";
  } else if (number.value === '16') {
    output.innerText = "XVI";
  } else if (number.value === '17') {
    output.innerText = "XVII";
  } else if (number.value === '18') {
    output.innerText = "XVIII";
  } else if (number.value === '19') {
    output.innerText = "XIX";
  } else if (number.value === '20') {
    output.innerText = "XX";
  } else if (number.value === '21') {
    output.innerText = "XXI";
  } else if (number.value === '22') {
    output.innerText = "XXII";
  } else if (number.value === '23') {
    output.innerText = "XXIII";
  } else if (number.value === '24') {
    output.innerText = "XXIV";
  } else if (number.value === '25') {
    output.innerText = "XXV";
  } else if (number.value === '26') {
    output.innerText = "XXVI";
  } else if (number.value === '27') {
    output.innerText = "XXVII";
  } else if (number.value === '28') {
    output.innerText = "XXVIII";
  } else if (number.value === '29') {
    output.innerText = "XXIX";
  } else if (number.value === '30') {
    output.innerText = "XXX";
  }
})

let removeAll = '';

clearBtn.addEventListener('click', () => {
   number.value = removeAll;
   output.innerText = removeAll;
})
