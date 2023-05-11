//-------------------------------------------------------------------sprawdzanie

let sprawdz = () => {
    let liczba1 = document.querySelector(".start").value;
    let liczba2 = document.querySelector(".koniec").value;
    liczba1 = Number(liczba1);
    liczba2 = Number(liczba2);
    pomocnik = Boolean(false);

    if (liczba1 == "" || liczba2 == "" || isNaN(liczba1) == true || isNaN(liczba2) == true) {
        document.querySelector(".wynik").innerHTML = "Coś źle uzupełniłeś!!!";
        document.querySelector(".wynik1").innerHTML = ``;
        document.querySelector(".wynik2").innerHTML = ``;
        document.querySelector(".wynik3").innerHTML = ``;
        alert("Coś źle uzupełniłeś!!!");
    } else {
        pomocnik = true;
        return;
    }

};
//-------------------------------------------------------------------Koniec sprawdzania

document.querySelector(".gen").addEventListener("click", () => {
    sprawdz();
    if (pomocnik == true) {
        document.querySelector(".wynik").innerHTML = ``;
        document.querySelector(".wynik1").innerHTML = ``;
        document.querySelector(".wynik2").innerHTML = ``;
        document.querySelector(".wynik3").innerHTML = ``;

        let liczba1 = document.querySelector(".start").value;
        let liczba2 = document.querySelector(".koniec").value;
        document.querySelector(".wynik1").innerHTML = `Od początku`;

        for(i = liczba1; i <= liczba2; i++){
            document.querySelector(".wynik").innerHTML += `${i} `;
        }

        document.querySelector(".wynik2").innerHTML = `Od końca`;

        for(i = liczba2; i >= liczba1; i--){
            document.querySelector(".wynik3").innerHTML += `${i} `;
        }
    } else {
        if (pomocnik == false) {
            return;
        }
    }
});