document.querySelector(".spr").addEventListener("click", () => {
   let pass = document.querySelector("#pass").value;

   if(pass == ""){
       document.querySelector(".wynik").innerHTML = "<p style='color:red;'>HASŁO JEST PUSTE</p>";
   }else{
    var reg = /[0-9]/g;
       if(pass.match(reg) != null && pass.length >= 7){
        document.querySelector(".wynik").innerHTML = `<span style="color:green;">HASŁO JEST DOBRE</span>`

       }else{
        var reg = /[0-9]/g;
           if(pass.length >= 4 && pass.length <= 6 && pass.match(reg) != null){
            document.querySelector(".wynik").innerHTML = `<span style="color:blue;">HASŁO JEST ŚREDNIE</span>`

           }else{
            document.querySelector(".wynik").innerHTML = `<span style="color:yellow;">HASŁO JEST SŁABE</span>`

           }
       }
   }
});