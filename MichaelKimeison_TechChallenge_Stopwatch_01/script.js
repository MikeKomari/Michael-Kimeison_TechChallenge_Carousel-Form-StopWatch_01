let startTime,
  elapsedTime = 0,
  timerInterval;
const timeDisplay = document.getElementById("timeDisplay");

// Untuk format timeDisplay
function updateTime() {
  const time = Date.now() - startTime + elapsedTime;
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);
  const millis = time % 1000;

  timeDisplay.textContent =
    `${String(hrs).padStart(2, "0")}:` +
    `${String(mins).padStart(2, "0")}:` +
    `${String(secs).padStart(2, "0")}.` +
    `${String(millis).padStart(3, "0")}`;
}

function startTimer() {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 100);
  } else {
    pauseTimer();
  }
}

function pauseTimer() {
  if (timerInterval) {
    elapsedTime += Date.now() - startTime;
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00.000";
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

// logic
// 1. Start timer pas diklik dan ketika diklik lagi pause
// 2. buat utility function untuk update timer setiap 100ms (bisa diubah jadi 10/1)
// 3. buat function untuk pause timer dan reset timer
// 4. buat function untuk format timer ke dalam format hh:mm:ss.ms
// 5. buat function untuk menampilkan timer ke dalam elemen HTML
// 6. buat event listener untuk tombol start, pause, dan reset
