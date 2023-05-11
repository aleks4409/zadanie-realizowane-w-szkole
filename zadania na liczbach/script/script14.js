document.querySelector(".oblicz").addEventListener("click", () => {
    let dl = document.querySelector("#dl").value;
    let szer = document.querySelector("#szer").value;
    let sufit = document.getElementsByName("sufit");
    if (dl == "" || szer == "" || dl <= 0 || szer <= 0) {
        alert("Coś źle uzupełniłeś!!!");
    } else {
        if (sufit[0].checked == true) {
            let sufit1 = dl * szer;
            scianyA = 2 * (dl * 2.7);
            scianyB = 2 * (szer * 2.7);
            let calosc = scianyA + scianyB + sufit1;
            document.querySelector(".wynik").innerHTML = `Całkowita powierzchnia do pomalowania z sufitem to ${calosc}m^2<br>Całkowity koszt to ${(scianyA + scianyB + sufit1) * 8}zł`;
        } else {
            if (sufit[0].checked == false) {
                scianyA = 2 * (dl * 2.7);
                scianyB = 2 * (szer * 2.7);
                let calosc = scianyA + scianyB;
                document.querySelector(".wynik").innerHTML = `Całkowita powierzchnia do pomalowania to ${calosc}m^2<br>Całkowity koszt to ${(scianyA + scianyB) * 8}zł`;
            }
        }

    }
});