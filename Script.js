// Function to update the countdown timer
function updateTimer() {
  const timerElement = document.getElementById("timer");
  let seconds = parseInt(timerElement.textContent);
  
  if (seconds > 1) {
    seconds--;
    timerElement.textContent = seconds;
  } else {
    clearInterval(interval);
    timerElement.textContent = "ntha myre";
  }
}

// Update the timer every second
const interval = setInterval(updateTimer, 1000);
