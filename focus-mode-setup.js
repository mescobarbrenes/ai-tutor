 function addTask() {
      const input = document.getElementById('taskInput');
      const taskText = input.value.trim();
      if (!taskText) return;

      const li = document.createElement('li');
      li.classList.add('task-item');

      const dragHandle = document.createElement('span');
      dragHandle.textContent = '≡';
      dragHandle.className = 'drag-handle';

      const span = document.createElement('span');
      span.textContent = taskText;

      const controls = document.createElement('div');
      controls.className = 'task-controls';

      const editBtn = document.createElement('button');
      editBtn.className = "edit-button";
      editBtn.textContent = 'Edit';
      editBtn.onclick = () => {
        const newText = prompt("Edit task:", span.textContent);
        if (newText !== null) span.textContent = newText;
      };

      const deleteBtn = document.createElement('button');
      deleteBtn.className = "delete-button";
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => li.remove();

      controls.append(editBtn, deleteBtn);
      li.append(dragHandle, span, controls);
      document.getElementById('taskList').appendChild(li);

      input.value = '';
      saveTasks();
    }

    new Sortable(document.getElementById('taskList')), {
      animation: 150,
      ghostClass: 'sortable-ghost'
    }

    function saveTasks() {
      const tasks = [];
      document.querySelectorAll('.task-item span:nth-child(2)').forEach(span => {
        tasks.push(span.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function enterFocusMode() {
      const pomodoro = document.getElementById('pomodoroInput').value;
      const pomodoroSec = document.getElementById('pomodoroSeconds').value;
      const shortBreak = document.getElementById('shortBreakInput').value;
      const shortBreakSec = document.getElementById('shortBreakSeconds').value;
      const longBreak = document.getElementById('longBreakInput').value;
      const longBreakSec = document.getElementById('longBreakSeconds').value;
      
      localStorage.setItem('pomodoro', pomodoro);
      localStorage.setItem('pomodoroSec', pomodoroSec);
      localStorage.setItem('shortBreak', shortBreak);
      localStorage.setItem('shortBreakSec', shortBreakSec);
      localStorage.setItem('longBreak', longBreak);
      localStorage.setItem('longBreakSec', longBreakSec);
      //you can hide elements or change layout here
      window.location.href = "focus-mode.html"
    }

    function showHelp() {
      alert(
      "Focus Mode Help and Set Up:\n\n" +
      "The Pomodoro Technique helps you stay productive by breaking work into intervals:\n" +
      "• 25 minutes of focused work (Pomodoro)\n" +
      "• 5-minute short breaks\n" +
      "• 15-minute long breaks after 4 consecutive Pomodoros\n\n" +
      "Setup Steps:\n" +
      "1. Adjust your Pomodoro, Short Break, and Long Break times if needed. " + 
      "Timers can be adjusted up or down by hovering over the timer numbers.\n" +
      "2. Enter your tasks using the task input box.\n" +
      "3. Click 'Enter Focus Mode' when you're ready to start.\n\n" +
      "Or click 'Return to Main Menu' to exit."
      );
    }

    function returnToMainMenu() {
      alert("Returning to Main Menu...");
      //restore normal layout here
    }