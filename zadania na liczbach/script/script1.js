
let random = Math.floor(Math.random(1)*6)+1;
let random1 = 200;
let random2 = random*30;
let random3 = random*40;


let mainBaner = document.querySelector(".baner").innerHTML = `<h${random} style= "color: rgb(${random1}, ${random2}, ${random3});">Aleks Spychała</h${random}>`;
