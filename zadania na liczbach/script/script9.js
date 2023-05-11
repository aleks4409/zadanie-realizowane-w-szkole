//-------------------------------------------------------------------sprawdzanie

let sprawdz = () => {
    let liczba1 = document.querySelector("#liczba1").value;

    pomocnik = Boolean(false);

    if (liczba1 == "" || isNaN(liczba1) == true) {
        document.querySelector(".wynik").innerHTML = "Coś źle uzupełniłeś!!!";
        alert("Coś źle uzupełniłeś!!!");
    } else {
        pomocnik = true;
        return;
    }

};
//-------------------------------------------------------------------Koniec sprawdzania






document.querySelector(".wykon").addEventListener("click", () => {
    sprawdz();
    if (pomocnik == true) {
        let liczba1 = document.querySelector("#liczba1").value;

        let jeden = document.querySelector("#lista").options[0].selected;
        let dwa = document.querySelector("#lista").options[1].selected;
        let trzy = document.querySelector("#lista").options[2].selected;
        let cztery = document.querySelector("#lista").options[3].selected;
        if (jeden == true) {
            let jeden1 = document.querySelector("#lista").options[0].value;

            document.querySelector(".wynik").innerHTML = `${liczba1} zł to ${liczba1*4.55} euro`;
        } else {
            if(dwa == true){
                document.querySelector(".wynik").innerHTML = `${liczba1} zł to ${liczba1*4} Dolar`;

            }else{
                if(trzy == true){
                    document.querySelector(".wynik").innerHTML = `${liczba1} zł to ${liczba1*4.36} Frank`;

                }else{
                    if(cztery == true){
                        document.querySelector(".wynik").innerHTML = `${liczba1} zł to ${liczba1*0.19} Koron`;

                    }
                }
            }
        }
    } else {
        if (pomocnik == false) {
            return;
        }
    }

});