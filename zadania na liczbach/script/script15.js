document.querySelector(".pay").addEventListener("click", () => {
    let ilosc = document.querySelector(".ilosc").value;
    let cena = document.querySelector(".cena").value;
    cena = Number(cena);
    let check = document.getElementsByName("check");
    cenaKon = ilosc * cena;
    let staly = (ilosc * cena) * 0.1;
    if (ilosc == "" || ilosc < 0 || cena == "" || cena < 0 || isNaN(cena) == true) {
        alert("Coś źle wpisałeś!!!");
    } else {
        if (check[0].checked == true) {
            document.querySelector(".wynik").innerHTML = `${cenaKon - staly}zł`;
        } else {
            if (ilosc > 20) {
                document.querySelector(".wynik").innerHTML = `${cenaKon - (cenaKon*0.05)}zł`;

            }else{
                if (check[0].checked == true && ilosc > 20) {
                    document.querySelector(".wynik").innerHTML = `${(cenaKon - staly) - ((cenaKon - staly) * 0.05)}zł`;
                }else{
                    document.querySelector(".wynik").innerHTML = `${cenaKon}zł`;

                }
            }
        }
    }
});