import { Task } from './task';

const mySubmit = () => {
  const title = document.getElementById('title').value;
  const desc = document.getElementById('description').value;
  const priority = document.getElementById('priority').value;
  const date = document.getElementById('date').value;
  const reminder = new Task(title, desc, priority, date);
  const newEvent = document.createElement('div');
  newEvent.textContent = `${reminder.title} ${reminder.desc}`;
  document.getElementById('events').appendChild(newEvent);
};

export { mySubmit };
