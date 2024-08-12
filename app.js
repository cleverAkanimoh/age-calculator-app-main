// inputs
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// errors
const dayError = document.getElementsByClassName("error")[0];
const monthError = document.getElementsByClassName("error")[1];
const yearError = document.getElementsByClassName("error")[2];

// results span
const dayResult = document.getElementsByClassName("result")[2];
const monthResult = document.getElementsByClassName("result")[1];
const yearResult = document.getElementsByClassName("result")[0];

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();
console.log(currentDay, currentMonth, currentYear);

function stringToNumber(value, error) {
  error.textContent = "";
  const numberValue = Number(value);

  if (isNaN(numberValue)) {
    error.textContent = "Value is not a number";
    return;
  }
  return numberValue;
}

day.oninput = () => {
  const value = stringToNumber(day.value, dayError);
  if (value == undefined || value == "") {
    return;
  }
  dayResult.innerHTML = currentDay - value;
};

month.oninput = () => {
  const value = stringToNumber(month.value, monthError);
  if (value == undefined || value == "") {
    return;
  }
  monthResult.innerHTML = currentMonth - value;
};
year.oninput = () => {
  const value = stringToNumber(year.value, yearError);
  if (value == undefined || value == "") {
    return;
  }
  yearResult.innerHTML = currentYear - value;
};
