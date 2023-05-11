//-------------------------------------------------------------------sprawdzanie
let wiek;
let sprawdz = () => {
    wiek = prompt("Podaj swój wiek:");
    pomocnik = Boolean(false);

    if (wiek == "" || isNaN(wiek) == true && wiek) {
        document.querySelector(".wynik").innerHTML = "Coś źle uzupełniłeś!!!";
        alert("Coś źle uzupełniłeś!!!");
        location.reload();
    } else {

        pomocnik = true;
        if (wiek <= 6) {
            document.querySelector(".wynik").innerHTML = "<h1>Przedszkolak<h1>";
            console.log("dziala")
        }else{
            if(wiek <= 14){
                document.querySelector(".wynik").innerHTML = "<h1>Podstawówkowicz<h1>";

            }else{
                if(wiek <= 20){
                    document.querySelector(".wynik").innerHTML = "<h1>Technik<h1>";
                }else{
                    if(wiek <= 25){
                        document.querySelector(".wynik").innerHTML = "<h1>Student<h1>";
                    }else{
                        if(wiek <= 65){
                            document.querySelector(".wynik").innerHTML = "<h1>Pracownik<h1>";
                        }else{
                            if(wiek >= 65 && wiek <= 99){
                                document.querySelector(".wynik").innerHTML = "<h1>Emeryt<h1>";

                            }else{
                                if(wiek <= 100 || wiek >= 100){
                                    document.querySelector(".wynik").innerHTML = "<h1>Przypuszczalnie niezywy, ale jeśli nie to gratulujemy<h1>";

                                }
                            }
                        }
                    }
                }
            }
        }
        return;
    }

};
//-------------------------------------------------------------------Koniec sprawdzania
sprawdz();


