let interval;
let pomodoroCount = 0;
const maxPomodoros = 4;
let isPaused = false;
let pausedTime = { min: 0, sec: 0 };
let resumeCallback = null;

const status = document.getElementById('pomodoro-status');

function saveTasks() {
  const tasks = Array.from(document.querySelectorAll('#taskList .task-item span:not(.drag-handle)'))
    .map(span => span.textContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const taskList = document.getElementById('taskList');
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  tasks.forEach(taskText => {
    const li = createTaskElement(taskText);
    taskList.appendChild(li);
  });
}

function createTaskElement(text) {
  const li = document.createElement('li');
  li.classList.add('task-item');

  const dragHandle = document.createElement('span');
  dragHandle.textContent = '≡';
  dragHandle.className = 'drag-handle';

  const span = document.createElement('span');
  span.textContent = text;

  const controls = document.createElement('div');
  controls.className = 'task-controls';

  const complete = document.createElement('button');
  const completeCheckbox = document.createElement("input");
  completeCheckbox.type = "checkbox";
  completeCheckbox.classList.add("complete-checkbox");

  completeCheckbox.addEventListener("change", () => {
  span.classList.toggle("completed", completeCheckbox.checked);
  const completedList = document.getElementById("completedList");
  const taskList = document.getElementById("taskList");

  if (completeCheckbox.checked) {
  completedList.appendChild(li);
  } else {
  taskList.appendChild(li);
  }

  saveTasks(); // Optional: Update this to handle completed tasks too
  });

  const editBtn = document.createElement('button');
  editBtn.className = "edit-button";
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null) {
      span.textContent = newText;
      saveTasks();
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.className = "delete-button";
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  controls.append(editBtn, deleteBtn);
  li.append(dragHandle, completeCheckbox, span, controls);
  return li;
}

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = createTaskElement(taskText);
  document.getElementById('taskList').appendChild(li);

  input.value = '';
  saveTasks();
}

function completeTask(taskItem) {
  taskItem.querySelector('.task-controls').remove();
  document.getElementById('completedList').appendChild(taskItem);
  saveTasks();
}

function updateStatus() {
  status.textContent = `${pomodoroCount} / ${maxPomodoros}`;
}

function startCountdown(minutes, seconds, callback) {
  resumeCallback = callback;

  const minInput = document.querySelector('.timer-min');
  const secInput = document.querySelector('.timer-sec');

  minInput.value = String(minutes).padStart(2, '0');
  secInput.value = String(seconds).padStart(2, '0');

  clearInterval(interval);
  interval = setInterval(() => {
    let min = parseInt(minInput.value, 10);
    let sec = parseInt(secInput.value, 10);

    if (sec === 0) {
      if (min === 0) {
        clearInterval(interval);
        alert("Time's up!");
        if (callback) callback();
        return;
      }
      min--;
      sec = 59;
    } else {
      sec--;
    }

    minInput.value = String(min).padStart(2, '0');
    secInput.value = String(sec).padStart(2, '0');
  }, 1000);
}

function startPomodoroCycle() {
  const pomodoroMin = parseInt(localStorage.getItem('pomodoro')) || 25;
  const shortBreakMin = parseInt(localStorage.getItem('shortBreak')) || 5;
  const longBreakMin = parseInt(localStorage.getItem('longBreak')) || 15;

  function runPomodoro() {
    updateStatus();
    showRandomTip();
    startCountdown(pomodoroMin, 0, () => {
      pomodoroCount++;
      if (pomodoroCount < maxPomodoros) {
        runShortBreak();
      } else {
        runLongBreak();
      }
    });
  }

  function runShortBreak() {
    status.textContent = "Short break";
    showRandomTip();
    startCountdown(shortBreakMin, 0, runPomodoro);
  }

  function runLongBreak() {
    status.textContent = "Long break";
    showRandomTip();
    startCountdown(longBreakMin, 0, () => {
      pomodoroCount = 0;
      runPomodoro();
    });
  }

  runPomodoro();
}

const tips = [
  "One function at a time. One bug at a time.",
  "Even the best devs once struggled with pointers.",
  "Take a breath — your brain is still compiling.",
  "Pomodoro by Pomodoro, you're building something amazing.",
  "Don't code harder. Code smarter.",
  "Your future self will thank you.",
  "Hard problems teach the most — lean into them.",
  "Every app starts with a single line of code.",
  "You've got this. Keep debugging.",
  "Every break fuels your next breakthrough."
];

function showRandomTip() {
  const tipBox = document.getElementById('tip-text');
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipBox.textContent = tips[randomIndex];
}

function pauseTimer() {
  if (!isPaused) {
    const min = parseInt(document.querySelector('.timer-min').value);
    const sec = parseInt(document.querySelector('.timer-sec').value);
    pausedTime = { min, sec };
    clearInterval(interval);
    isPaused = true;
    document.querySelector('.footer-button:nth-child(1)').textContent = "Resume";
    alert("Pomodoro paused.");
  } else {
    resumeTimer();
  }
}

function resumeTimer() {
  if (isPaused) {
    isPaused = false;
    document.querySelector('.footer-button:nth-child(1)').textContent = "Pause";
    startCountdown(pausedTime.min, pausedTime.sec, resumeCallback);
    alert("Pomodoro resumed.");
  }
}

function endSession() {
  clearInterval(interval);
  pomodoroCount = 0;
  document.querySelector('.timer-min').value = '25';
  document.querySelector('.timer-sec').value = '00';
  updateStatus();
  alert("Session ended.");
}

function goBack() {
  //alert("Returning to AI Tutor...");
}

function showHelp() {
  alert(
  "How to Use Focus Mode\n\n" +
  "1. Adjust your Pomodoro, Short Break, and Long Break times if needed. " + 
  "Timers can be adjusted up or down by hovering over the timer numbers.\n" +
  "2. Enter your tasks using the task input box.\n" +
  "3. Click 'Enter Focus Mode' when you're ready to start.\n\n" +
  "Or click 'Return to Main Menu' to exit."
  );
}

new Sortable(document.getElementById('taskList'), {
  animation: 150,
  ghostClass: 'sortable-ghost'
});

window.onload = () => {
  loadTasks();
  startPomodoroCycle();
  document.querySelector('.footer-button:nth-child(1)').onclick = pauseTimer;
  document.querySelector('.footer-button:nth-child(2)').onclick = endSession;
};