import { mySubmit } from './submit';

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

const button = document.getElementById('btn');
button.onclick = myFunction;

window.onclick = (event) => {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; i += 1) {
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

const submit = document.getElementById('submit');

submit.onclick = mySubmit;
