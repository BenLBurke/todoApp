document.addEventListener('DOMContentLoaded', () => {
  const doingPage = document.getElementById('doing-page');
  const donePage = document.getElementById('done-page');
  const doingTasksList = document.getElementById('doing-tasks');
  const doneTasksList = document.getElementById('done-tasks');

  function addTask() {
    const taskName = prompt('Enter task name:');
    if (taskName) {
      const taskItem = createTaskItem(taskName);
      doingTasksList.appendChild(taskItem);
    }
  }

  function createTaskItem(taskName) {
    const taskItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      moveTask(taskItem);
    });

    const taskLabel = document.createElement('label');
    taskLabel.textContent = taskName;

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskLabel);

    return taskItem;
  }

  function moveTask(taskItem) {
    const checkbox = taskItem.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      const completedDate = new Date().toLocaleDateString();
      const completedTaskItem = document.createElement('li');
      
      const checkMark = document.createElement('span');
      checkMark.textContent = '✅'; // Check mark emoji
      completedTaskItem.appendChild(checkMark);

      const taskLabel = document.createElement('label');
      taskLabel.textContent = taskItem.textContent;
      completedTaskItem.appendChild(taskLabel);

      completedTaskItem.innerHTML += ` (Completed on ${completedDate})`;

      doneTasksList.appendChild(completedTaskItem);
      taskItem.remove();
    }
  }

  // Initial setup
  document.getElementById('add-task-btn').addEventListener('click', () => addTask());
});
