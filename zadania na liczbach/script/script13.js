document.querySelector(".baton").addEventListener("click", () => {
    let radioValue = document.getElementsByName("ulga");
    let cena = 3.25;
    for (i = 0; i <= 4; i++) {
        for (j = 0; j <= 2; j++) {
            if (document.querySelector("#lista").options[i].selected == true && radioValue[j].checked) {
                cena *= document.querySelector("#lista").options[i].value;
                console.log(cena)
                cena = cena - (cena * radioValue[j].value);
                cena = cena - (cena * (i / 20));
                document.querySelector(".wynik").innerHTML = `${cena.toFixed(2)}`;
            } 
        }
    }
});