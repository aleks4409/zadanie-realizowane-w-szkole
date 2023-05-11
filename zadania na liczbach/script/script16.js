document.querySelector(".baton").addEventListener("click", () => {
let binarny = document.querySelector("#lista").options[0];
let osemkowy = document.querySelector("#lista").options[1];
let Hexadecymalny = document.querySelector("#lista").options[2];


    let liczba = document.querySelector("#liczba").value;
    liczba = Number(liczba);
    if(liczba == "" || liczba < 0){
        alert("Coś źle uzupełniłeś!!!");
    }else{
        if(binarny.selected == true){
            document.querySelector(".wynik").innerHTML = `${liczba.toString(2)}`;
        } else{
            if(osemkowy.selected == true){
                document.querySelector(".wynik").innerHTML = `${liczba.toString(8)}`;

            }else{
                if(Hexadecymalny.selected == true){
                    document.querySelector(".wynik").innerHTML = `${liczba.toString(16)}`;
                }
            }
        }
    }
});