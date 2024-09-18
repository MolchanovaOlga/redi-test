const dataString = document.querySelector(".order-date-text");

export function currentDay() {
  let data = new Date();
  let year = data.getFullYear();
  let month = String(data.getMonth() + 1).padStart(2, "0");
  let day = String(data.getDate()).padStart(2, "0");
  let currentDay = `${day}.${month}.${year}`;
  dataString.textContent = currentDay;
}
