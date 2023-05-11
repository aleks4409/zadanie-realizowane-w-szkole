document.querySelector(".baton1").addEventListener("click", () => {
    history.back(-1);
});

document.querySelector(".baton2").addEventListener("click", () => {
    history.forward();
});

document.querySelector(".baton3").addEventListener("click", () => {
    location.reload();
});

document.querySelector(".baton4").addEventListener("click", () => {
    let nazwa = prompt("Do jakiej strony bś chciał przejść?");
    if(nazwa == ""){
        alert("Czegoś nie wpisałeś!!!");
    }
    location.assign(nazwa);
});