const data = new Date();
var div = document.getElementById('stopka'); 
function time() {
  div.innerHTML = "";
  var x = document.lastModified;
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  div.innerHTML = `Dzień ${data.getDate()} Miesiąc ${data.getMonth()+1} Rok ${data.getFullYear()}<br>${h} : ${m} : ${s} Ostatnia modyfikacja ${x}`;

}

setInterval(time, 1000);