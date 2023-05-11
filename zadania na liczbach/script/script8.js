//-------------------------------------------------------------------sprawdzanie

let sprawdz = () => {
    let liczba1 = document.querySelector(".liczba1").value;
    pomocnik = Boolean(false);

    if (liczba1 == "" || isNaN(liczba1) == true) {
        document.querySelector(".tu").innerHTML = "Coś źle uzupełniłeś!!!";
        alert("Coś źle uzupełniłeś!!!");
    } else {
        pomocnik = true;
        return;
    }

};
//-------------------------------------------------------------------Koniec sprawdzania



document.querySelector(".wyn").addEventListener("click", () => {
    sprawdz();
    if (pomocnik == true) {
        let liczba1 = document.querySelector(".liczba1").value;
        liczba1 = Number(liczba1);
        var i = 1;
        var s = 1;
        while (i <= liczba1) s *= i++;
        document.querySelector(".tu").innerHTML = `Sinia z ${liczba1} != ${s}<br>Binarna ${liczba1.toString(2)}<br>Szesnastkowa ${liczba1.toString(16)}<br>Osemkowa ${liczba1.toString(8)}`;
    } else {
        if (pomocnik == false) {
            return;
        }
    }
})