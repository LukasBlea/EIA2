var Aufgabe04;
(function (Aufgabe04) {
    let gesamtpreis = 0;
    window.addEventListener("change", init);
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handler);
        }
    }
    function handler(_event) {
        let ziel = _event.target;
        switch (ziel.name) {
            case ("Erdbeere"):
                {
                    if (ziel.checked == true) {
                        document.getElementById("eis1").innerHTML = ziel.value + "   " + ziel.name;
                        let preis1 = Number(ziel.value);
                        preis(preis1, 0);
                    }
                    else {
                        document.getElementById("eis1").innerHTML = "";
                        let preis1 = 0;
                        preis(0, preis1);
                    }
                }
                break;
            case ("Vanille"):
                {
                    if (ziel.checked == true) {
                        document.getElementById("eis2").innerHTML = ziel.value + "   " + ziel.name;
                        let preis2 = Number(ziel.value);
                        preis(preis2, 0);
                    }
                    else {
                        document.getElementById("eis2").innerHTML = "";
                        let preis2 = 0;
                        preis(0, preis2);
                    }
                }
                break;
            case ("Kokos"):
                {
                    if (ziel.checked == true) {
                        document.getElementById("eis3").innerHTML = ziel.value + "   " + ziel.name;
                        let preis3 = Number(ziel.value);
                        preis(preis3, 0);
                    }
                    else {
                        document.getElementById("eis3").innerHTML = "";
                        let preis3 = 0;
                        preis(0, preis3);
                    }
                }
                break;
            case ("Himbeere"):
                {
                    if (ziel.checked == true) {
                        document.getElementById("eis4").innerHTML = ziel.value + "   " + ziel.name;
                        let preis4 = Number(ziel.value);
                        preis(preis4, 0);
                    }
                    else {
                        document.getElementById("eis4").innerHTML = "";
                        let preis4 = 0;
                        preis(0, preis4);
                    }
                }
                break;
            case ("Schokolade"):
                {
                    if (ziel.checked == true) {
                        document.getElementById("eis5").innerHTML = ziel.value + "   " + ziel.name;
                        let preis5 = Number(ziel.value);
                        preis(preis5, 0);
                    }
                    else {
                        document.getElementById("eis5").innerHTML = "";
                        let preis5 = 0;
                        preis(0, preis5);
                    }
                }
                break;
            case ("Apfel"):
                {
                    if (ziel.checked == true) {
                        document.getElementById("eis6").innerHTML = ziel.value + "   " + ziel.name;
                        let preis6 = Number(ziel.value);
                        preis(preis6, 0);
                    }
                    else {
                        document.getElementById("eis6").innerHTML = "";
                        let preis6 = 0;
                        preis(0, preis6);
                    }
                }
                break;
            case ("Kiwi"):
                {
                    if (ziel.checked == true) {
                        document.getElementById("eis7").innerHTML = ziel.value + "   " + ziel.name;
                        let preis7 = Number(ziel.value);
                        preis(preis7, 0);
                    }
                    else {
                        document.getElementById("eis7").innerHTML = "";
                        let preis7 = 0;
                        preis(0, preis7);
                    }
                }
                break;
            case ("Melone"):
                {
                    if (ziel.checked == true) {
                        document.getElementById("eis8").innerHTML = ziel.value + "   " + ziel.name;
                        let preis8 = Number(ziel.value);
                        preis(preis8, 0);
                    }
                    else {
                        document.getElementById("eis8").innerHTML = "";
                        let preis8 = 0;
                        preis(0, preis8);
                    }
                }
                break;
            case ("Haselnuß"):
                {
                    if (ziel.checked == true) {
                        document.getElementById("eis9").innerHTML = ziel.value + "   " + ziel.name;
                        let preis9 = Number(ziel.value);
                        preis(preis9, 0);
                    }
                    else {
                        document.getElementById("eis9").innerHTML = "";
                        let preis9;
                        preis(0, preis9);
                    }
                }
                break;
            case ("Zitrone"):
                {
                    if (ziel.checked == true) {
                        document.getElementById("eis10").innerHTML = ziel.value + "   " + ziel.name;
                        let preis10 = Number(ziel.value);
                        preis(preis10, 0);
                    }
                    else {
                        document.getElementById("eis10").innerHTML = "";
                        let preis10;
                        preis(0, preis10);
                    }
                }
                break;
        }
        function preis(_preisaddition, _preissubstracion) {
            let hilfestellung = 0.5;
            gesamtpreis = gesamtpreis - hilfestellung + _preisaddition - _preissubstracion;
            document.getElementById("gesamtpreis").innerHTML = "Der Gesamtpreis der Bestellung beträgt: " + gesamtpreis + "€";
        }
    }
})(Aufgabe04 || (Aufgabe04 = {}));
//# sourceMappingURL=main.js.map