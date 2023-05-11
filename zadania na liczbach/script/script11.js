//-------------------------------------------------------------------sprawdzanie

let sprawdz = () => {
    let liczba1 = document.querySelector("#liczba1").value;
    pomocnik = Boolean(false);

    if (liczba1 == "") {
        document.querySelector(".wynik").innerHTML = "Coś źle uzupełniłeś!!!";
        alert("Coś źle uzupełniłeś!!!");
    } else {
        pomocnik = true;
        return;
    }

};
//-------------------------------------------------------------------Koniec sprawdzania


document.querySelector(".F").addEventListener("click", () => {
    sprawdz();
    if (pomocnik == true) {
        let liczba1 = document.querySelector("#liczba1").value;
        liczba1 = Number(liczba1);
        document.querySelector(".wynik").innerHTML = `${liczba1}°C = ${(liczba1*1.8)+32}°F`;

    } else {
        if (pomocnik == false) {
            return;
        }
    }
});

document.querySelector(".K").addEventListener("click", () => {
    sprawdz();
    if (pomocnik == true) {
        let liczba1 = document.querySelector("#liczba1").value;

        document.querySelector(".wynik").innerHTML = `${liczba1}°C = ${Number(liczba1)+273.15}K`;

    } else {
        if (pomocnik == false) {
            return;
        }
    }
});