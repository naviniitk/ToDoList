import mydropDown from './dropdown';

const button = document.getElementById('dropbtn');
const sidebar = document.getElementById('sidebar');
button.onclick = mydropDown(sidebar);
