(()=>{"use strict";document.getElementById("btn").onclick=function(){document.getElementById("myDropdown").classList.toggle("show")},window.onclick=function(t){if(!t.target.matches(".dropbtn")){const t=document.getElementsByClassName("dropdown-content");let n;for(n=0;n<t.length;n++){const o=t[n];o.classList.contains("show")&&o.classList.remove("show")}}}})();