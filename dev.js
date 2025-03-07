document.getElementById("to-questions").addEventListener("click", function () {
  window.location.href = "questions.html";
});

function changeBackground() {
  document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Update Date and Day on Page Load
function updateDateAndDay() {
  const now = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const month = now.toLocaleString("default", { month: "short" });
  const day = now.getDate();
  const year = now.getFullYear();

  document.getElementById("day").textContent = dayOfWeek + ",";
  document.getElementById("date").textContent = `${month} ${day}, ${year}`;
}

window.onload = updateDateAndDay;

let taskCount = 6;
let navbarCount = 23;
let totalTasks = 6;
let completedTasks = 0;

// Handle task button click (completed)
document.querySelectorAll(".task-btn").forEach((btn) => {
  btn.onclick = function () {
    if (!btn.classList.contains("Completed")) {
      taskCount--; // Decrease Task Assigned
      navbarCount++; // Increase Navbar Count

      // Update task count display
      document.getElementById("taskCount").querySelector("span").innerHTML =
        taskCount;
      document.querySelector(".checkbox-primary + span").innerHTML =
        navbarCount;

      btn.classList.add("Completed");
      btn.innerHTML = "Completed";
      btn.disabled = true;

      const taskName =
        btn.parentElement.parentElement.querySelector("h2").textContent;

      // Get the current time
      const currentTime = new Date().toLocaleTimeString();

      // Create a log div element with fixed size
      const logElement = document.createElement("div");
      logElement.classList.add("activity-log-entry");
      logElement.style.width = "100%";
      logElement.style.height = "80px";
      logElement.style.overflow = "hidden";
      logElement.style.backgroundColor = "#F4F7FF";
      logElement.style.marginBottom = "15px";
      logElement.style.padding = "10px";
      logElement.style.borderRadius = "8px";

      // Set the log message with task name and time
      logElement.innerHTML = `You have completed The Task '${taskName}' at ${currentTime}`;

      const logContainer = document.getElementById("activity-log");
      logContainer.appendChild(logElement);

      // Show alert for task completion
      alert(`You have completed the task: '${taskName}'`);

      completedTasks++;

      console.log("Completed tasks count: ", completedTasks);

      if (completedTasks === totalTasks) {
        setTimeout(() => {
          alert("Congratulations! All tasks are completed.");
        }, 500);
      }
    }
  };
});

// Handle "Clear History" button click to clear activity logs
document.querySelector(".btn-clear-history").onclick = function () {
  const activityLog = document.getElementById("activity-log");

  activityLog.innerHTML = "";
};
