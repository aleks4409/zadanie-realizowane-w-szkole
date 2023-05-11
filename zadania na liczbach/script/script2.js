
//-------------------------------------------------------------------sprawdzanie

let sprawdz = () => {
    let liczba1 = document.querySelector(".liczba1").value;
    let liczba2 = document.querySelector(".liczba2").value;
    pomocnik = Boolean(false);

    if (liczba1 == "" || liczba2 == "" || isNaN(liczba1) == true || isNaN(liczba2) == true) {
        document.querySelector(".wynik").innerHTML = "Coś źle uzupełniłeś!!!";
        alert("Coś źle uzupełniłeś!!!");
    } else {
        pomocnik = true;
        return;
    }

};
//-------------------------------------------------------------------Koniec sprawdzania

//-------------------------------------------------------------------dodawanie
document.querySelector(".button1").addEventListener("click", () => {
    sprawdz();
    if (pomocnik == true) {
        const liczba1 = document.querySelector(".liczba1").value;
        const liczba2 = document.querySelector(".liczba2").value;
        document.querySelector(".wynik").innerHTML = `${liczba1}+${liczba2}=${Number(liczba1) + Number(liczba2)}`;
    } else {
        if (pomocnik == false) {
            return;
        }
    }


});
//-------------------------------------------------------------------Koniec dodawania

//-------------------------------------------------------------------odejmowanie
document.querySelector(".button2").addEventListener("click", () => {
    sprawdz();
    if (pomocnik == true) {
        const liczba1 = document.querySelector(".liczba1").value;
        const liczba2 = document.querySelector(".liczba2").value;
        document.querySelector(".wynik").innerHTML = `${liczba1}-${liczba2}=${Number(liczba1) - Number(liczba2)}`;
    } else {
        if (pomocnik == false) {
            return;
        }
    }


});
//-------------------------------------------------------------------Koniec odejmowania

//-------------------------------------------------------------------Mnozenie
document.querySelector(".button3").addEventListener("click", () => {
    sprawdz();
    if (pomocnik == true) {
        const liczba1 = document.querySelector(".liczba1").value;
        const liczba2 = document.querySelector(".liczba2").value;
        document.querySelector(".wynik").innerHTML = `${liczba1}•${liczba2}=${Number(liczba1) * Number(liczba2)}`;
    } else {
        if (pomocnik == false) {
            return;
        }
    }


});
//-------------------------------------------------------------------Koniec Mnozenia

//-------------------------------------------------------------------Dzielenie
document.querySelector(".button4").addEventListener("click", () => {
    sprawdz();
    const liczba1 = document.querySelector(".liczba1").value;
    const liczba2 = document.querySelector(".liczba2").value;

    if (liczba1 == 0 || liczba2 == 0) {
        alert("Nie woldno dzielić przez zero");
        document.querySelector(".wynik").innerHTML = "Nie woldno dzielić przez zero";
        return;
    } else {
        if (pomocnik == true) {
            document.querySelector(".wynik").innerHTML = `${liczba1}/${liczba2}=${Number(liczba1) / Number(liczba2)}`;
        } else {
            if (pomocnik == false) {
                return;
            }
        }
    }
});
//-------------------------------------------------------------------Koniec Dzielenia

//-------------------------------------------------------------------Potęga
document.querySelector(".button5").addEventListener("click", () => {
    sprawdz();
    if (pomocnik == true) {
        const liczba1 = document.querySelector(".liczba1").value;
        const liczba2 = document.querySelector(".liczba2").value;
        document.querySelector(".wynik").innerHTML = `${liczba1}^${liczba2}=${Math.pow(Number(liczba1), Number(liczba2))}`;
    } else {
        if (pomocnik == false) {
            return;
        }
    }


});

//-------------------------------------------------------------------Koniec potęgi
