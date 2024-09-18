const timeText = document.querySelector(".time-text");

const timeInMs = 2 * 60 * 60 * 1000;

const startTimeObj = {
  hours: 2,
  minutes: 0,
  seconds: 0,
};
console.log(startTimeObj.hours);
convertMs(timeInMs);

function drawTimer({ hours, minutes, seconds }) {
  timeText.textContent = `${hours}:${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;

  const hours = Math.floor(ms / hour);

  const minutes = Math.floor((ms % hour) / minute);

  const seconds = Math.floor(((ms % hour) % minute) / second);
  console.log({ hours, minutes, seconds });

  return { hours, minutes, seconds };
}

export function addTimer() {
  const endTime = Date.now() + timeInMs;

  const timerInterval = setInterval(function () {
    const now = Date.now();
    const timeLeft = endTime - now;

    const converteredTime = convertMs(timeLeft);
    drawTimer(converteredTime);
  }, 1000);
}
