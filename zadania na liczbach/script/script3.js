//-------------------------------------------------------------------sprawdzanie

let sprawdz = () => {
    let liczba1 = document.querySelector(".pierwsza").value;
    let liczba2 = document.querySelector(".druga").value;
    let liczba3 = document.querySelector(".trzecia").value;
    pomocnik = Boolean(false);

    if (liczba1 == "" || liczba2 == "" || liczba3 == "" || isNaN(liczba1) == true || isNaN(liczba2) == true || isNaN(liczba3) == true) {
        document.querySelector(".wynik").innerHTML = "Coś źle uzupełniłeś!!!";
        alert("Coś źle uzupełniłeś!!!");
    } else {
        pomocnik = true;
        return;
    }

};
//-------------------------------------------------------------------Koniec sprawdzania






document.querySelector(".tekst").addEventListener("click", () => {

    document.querySelector(".wybor").style.display = "block";

    document.querySelector(".tak").addEventListener("click", () => {
        sprawdz();
        if (pomocnik == true) {
            let liczba1 = document.querySelector(".pierwsza").value;
            let liczba2 = document.querySelector(".druga").value;
            let liczba3 = document.querySelector(".trzecia").value;
            liczba1 = Number(liczba1);
            liczba2 = Number(liczba2);
            liczba3 = Number(liczba3);
            let delta = (liczba2 * liczba2) - (4 * (liczba1 * liczba3));
            delta = Number(delta);
            let x1 = (-liczba2 - Math.sqrt(delta)) / (2 * liczba1);
            let x2 = (-liczba2 + Math.sqrt(delta)) / (2 * liczba1);
            if (delta < 0) {
                document.querySelector(".wynik").innerHTML = "x1 = Funkcja nie posiada pierwiastków<br>x2 = Funkcja nie posiada pierwia";
            } else {
                document.querySelector(".wynik").innerHTML = `a = ${liczba1}, b = ${liczba2}, c = ${liczba2}<br> ∆ = ${delta}<br>x1 = ${x1}<br>x2 = ${x2}`;
            }

        } else {
            if (pomocnik == false) {
                return;
            }
        }
    });



});


document.querySelector(".dialog").addEventListener("click", () => {
    document.querySelector(".wybor").style.display = "none";
    let liczba1 = prompt("podaj pierwszą liczbę");
    if (liczba1 == "" || isNaN(liczba1) == true) {
        alert("Musisz podać liczbę!!!");
    } else {
        let liczba2 = prompt("podaj pierwszą drugą");
        if (liczba2 == "" || isNaN(liczba2) == true) {
            alert("Musisz podać liczbę!!!");
        } else {
            let liczba3 = prompt("podaj pierwszą liczbę");
            if (liczba3 == "" || isNaN(liczba3) == true) {
                alert("Musisz podać liczbę!!!");
            } else {


                liczba1 = Number(liczba1);
                liczba2 = Number(liczba2);
                liczba3 = Number(liczba3);
                let delta = (liczba2 * liczba2) - (4 * (liczba1 * liczba3));
                delta = Number(delta);
                let x1 = (-liczba2 - Math.sqrt(delta)) / (2 * liczba1);
                let x2 = (-liczba2 + Math.sqrt(delta)) / (2 * liczba1);
                if (delta < 0) {
                    alert("x1 = Funkcja nie posiada pierwiastków\nx2 = Funkcja nie posiada pierwia");
                } else {
                    alert(`a = ${liczba1}, b = ${liczba2}, c = ${liczba2}\n∆ = ${delta}\nx1 = ${x1}\nx2 = ${x2}`);
                }


            }
        }
    }

})
