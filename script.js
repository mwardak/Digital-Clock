// display clock with AM:PM
let isMilitaryTime = false;

function increment() {
  const today = new Date();
  let amPmString = "";
  if (today.getHours() < 12) {
    amPmString = "AM";
  } else {
    amPmString = "PM";
  }

  let hours = "";

  if (isMilitaryTime === true) {
    hours = today.getHours();
  } else {
    hours = today.getHours() - 12;
  }

  const time =
    hours + ":" + today.getMinutes() + ":" + today.getSeconds() + amPmString;

  const clock = time;

  const paragraph = (document.getElementById(
    "timer-display"
  ).textContent = clock);

  //display the month and weekday

  const dte = new Date();

  const monthly = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const year = today.getFullYear();

  const month = monthly[dte.getMonth()];
  const mDay = weekday[dte.getDay()];
  const nDay = dte.getDate();

  const setDate = mDay + ", " + month + ", " + nDay + ", " + year;

  const x = (document.getElementById("date-display").textContent = setDate);
}
setInterval(increment, 1000);

// Toggle button for 12/24 hour display

document.getElementById("button").addEventListener("click", function() {
  if (isMilitaryTime === true) {
    isMilitaryTime = false;
  } else {
    isMilitaryTime = true;
  }
});
