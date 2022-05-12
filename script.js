const gomb = document.getElementById('jatek');

//ha a gombra kattintok, akkor a játék függvény fusson le
gomb.addEventListener("click", Jatek);

function Jatek(){
    let szám = Math.floor(Math.random() * 100) + 1;
    let sz = 1;
    let tipp = prompt("Adj meg egy számot:");

    while (tipp != szám) {
        if (tipp < szám) {
            alert("nagyobb");
        } else {
            alert("kisebb");
        }

        //tippek száma növelése
        sz++;

        tipp = prompt("Adj meg egy számot:");
    }

    let eredmeny = document.getElementById('eredmeny');
    eredmeny.innerHTML = "Eltaláltad! Ppróbálkozásaidnak száma:" + sz
}


