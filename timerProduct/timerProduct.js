function startTimer() {
  const now = new Date();
  const endOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0
  );
  const timeLimitElement = document.querySelector(".timeLimit");

  function updateTimer() {
    const currentTime = new Date();
    const timeLeft = endOfDay - currentTime;

    if (timeLeft >= 0) {
      const hours = String(
        Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      const minutes = String(Math.floor((timeLeft / 1000 / 60) % 60)).padStart(
        2,
        "0"
      );
      const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(
        2,
        "0"
      );

      timeLimitElement.innerHTML = `
            <span>${hours}</span> :
            <span>${minutes}</span> :
            <span>${seconds}</span>
          `;
    } else {
      timeLimitElement.innerHTML = "00:00:00";
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

document.addEventListener("DOMContentLoaded", startTimer);
