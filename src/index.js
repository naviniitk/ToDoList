function Remind (title, desc, date) {
  this.title = title;
  this.desc = desc;
  this.date = date;
}

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

const button = document.getElementById('btn');
button.onclick = myFunction;

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

const add = document.getElementById('add');
add.onclick = () => {
  document.getElementById('fillform').style.display = 'block';
};

const close = document.getElementById('close');
close.onclick = () => {
  document.getElementById('fillform').style.display = 'none';
};

const events = document.getElementById('events');

document.getElementById('submit').onclick = () => {
  const title = document.getElementById('title').value;
  const desc = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const reminder = new Remind(title, desc, date);
  list.push(reminder);
  showList(list);
};

const list = [];

function showList(e) {
  document.getElementById('events').innerText = e.title;
}
