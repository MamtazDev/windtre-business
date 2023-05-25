// Set the expiration date
var expirationDate = new Date("2023-06-01");

// Update the countdown every second
var countdown = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining until expiration
  var timeRemaining = expirationDate.getTime() - now;

  // Calculate the days, hours, minutes, and seconds
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // If the countdown is finished, display a message
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
  }
}, 1000);
