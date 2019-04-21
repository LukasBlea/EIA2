namespace Aufgabe04 {

    let gesamtpreis: number = 0;

    window.addEventListener("load", init);

    function init(_event: Event): void {

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handler);
        }
    }

    function handler(_event: Event): void {

        let ziel: HTMLInputElement = <HTMLInputElement>_event.target;

        switch (ziel.name) {
            case ("Erdbeere"): {
                if (ziel.checked == true) {
                    document.getElementById("eis1").innerHTML = "1x  " + ziel.name;
                    let preis1: number = Number(ziel.value);
                    preis(0.50, preis1, 0);
                } else {
                    document.getElementById("eis1").innerHTML = "";
                    let preis1: number = 0;
                    preis(0.50, 0, preis1);
                }
                break;
            }

            case ("Vanille"): {
                if (ziel.checked == true) {
                    document.getElementById("eis2").innerHTML = "1x  " + ziel.name;
                    let preis2: number = Number(ziel.value);
                    preis(0.50, preis2, 0);
                } else {
                    document.getElementById("eis2").innerHTML = "";
                    let preis2: number = 0;
                    preis(0.50, 0, preis2);
                }
                break;
            }

            case ("Kokos"): {
                if (ziel.checked == true) {
                    document.getElementById("eis3").innerHTML = "1x  " + ziel.name;
                    let preis3: number = Number(ziel.value);
                    preis(0.50, preis3, 0);
                } else {
                    document.getElementById("eis3").innerHTML = "";
                    let preis3: number = 0;
                    preis(0.50, 0, preis3);
                }
                break;
            }

            case ("Himbeere"): {
                if (ziel.checked == true) {
                    document.getElementById("eis4").innerHTML = "1x  " + ziel.name;
                    let preis4: number = Number(ziel.value);
                    preis(0.50, preis4, 0);
                } else {
                    document.getElementById("eis4").innerHTML = "";
                    let preis4: number = 0;
                    preis(0.50, 0, preis4);
                }
                break;
            }

            case ("Schokolade"): {
                if (ziel.checked == true) {
                    document.getElementById("eis5").innerHTML = "1x  " + ziel.name;
                    let preis5: number = Number(ziel.value);
                    preis(0.50, preis5, 0);
                } else {
                    document.getElementById("eis5").innerHTML = "";
                    let preis5: number = 0;
                    preis(0.50, 0, preis5);
                }
                break;
            }

            case ("Apfel"): {
                if (ziel.checked == true) {
                    document.getElementById("eis6").innerHTML = "1x  " + ziel.name;
                    let preis6: number = Number(ziel.value);
                    preis(0.50, preis6, 0);
                } else {
                    document.getElementById("eis6").innerHTML = "";
                    let preis6: number = 0;
                    preis(0.50, 0, preis6);
                }
                break;
            }

            case ("Kiwi"): {
                if (ziel.checked == true) {
                    document.getElementById("eis7").innerHTML = "1x  " + ziel.name;
                    let preis7: number = Number(ziel.value);
                    preis(0.50, preis7, 0);
                } else {
                    document.getElementById("eis7").innerHTML = "";
                    let preis7: number = 0;
                    preis(0.50, 0, preis7);
                }
                break;
            }

            case ("Melone"): {
                if (ziel.checked == true) {
                    document.getElementById("eis8").innerHTML = "1x  " + ziel.name;
                    let preis8: number = Number(ziel.value);
                    preis(0.50, preis8, 0);
                } else {
                    document.getElementById("eis8").innerHTML = "";
                    let preis8: number = 0;
                    preis(0.50, 0, preis8);
                }
                break;
            }
            case ("Haselnuss"): {
                if (ziel.checked == true) {
                    document.getElementById("eis9").innerHTML = "1x  " + ziel.name;
                    let preis9: number = Number(ziel.value);
                    preis(0.50, preis9, 0);
                } else {
                    document.getElementById("eis9").innerHTML = "";
                    let preis9: number = 0;
                    preis(0.50, 0, preis9);
                }
                break;
            }
            case ("Zitrone"): {
                if (ziel.checked == true) {
                    document.getElementById("eis10").innerHTML = "1x  " + ziel.name;
                    let preis10: number = Number(ziel.value);
                    preis(0.50, preis10, 0);
                } else {
                    document.getElementById("eis10").innerHTML = "";
                    let preis10: number = 0;
                    preis(0.50, 0, preis10);
                }
                break;
            }
            case ("Waffel oder Becher"): {
                if (ziel.checked == true) {
                    document.getElementById("woderb").innerHTML = ziel.id;
                } else {
                    document.getElementById("woderb").innerHTML = "";
                }
                break;
            }
            case("Portion Sahne"): {
                if (ziel.checked == true) {
                    document.getElementById("topping1").innerHTML = ziel.id;
                    let preistopping: number = Number(ziel.value);
                    preis(0.30, preistopping, 0);
                } else {
                    document.getElementById("topping1").innerHTML = "";
                    let preistopping: number = 0;
                    preis(0.30, 0, preistopping);
                }
                break;
            }
            case("Schokosoße"): {
                if (ziel.checked == true) {
                    document.getElementById("topping2").innerHTML = ziel.id;
                    let preistopping: number = Number(ziel.value);
                    preis(0.40, preistopping, 0);
                } else {
                    document.getElementById("topping2").innerHTML = "";
                    let preistopping: number = 0;
                    preis(0.40, 0, preistopping);
                }
                break;
            }
            case("Erdbeersoße"): {
                if (ziel.checked == true) {
                    document.getElementById("topping3").innerHTML = ziel.id;
                    let preistopping: number = Number(ziel.value);
                    preis(0.40, preistopping, 0);
                } else {
                    document.getElementById("topping3").innerHTML = "";
                    let preistopping: number = 0;
                    preis(0.40, 0, preistopping);
                }
                break;
            }
            case("Schokostreusel"): {
                if (ziel.checked == true) {
                    document.getElementById("topping4").innerHTML = ziel.id;
                    let preistopping: number = Number(ziel.value);
                    preis(0.20, preistopping, 0);
                } else {
                    document.getElementById("topping4").innerHTML = "";
                    let preistopping: number = 0;
                    preis(0.20, 0, preistopping);
                }
                break;
            }
            case("Haribos"): {
                if (ziel.checked == true) {
                    document.getElementById("topping4").innerHTML = ziel.id;
                    let preistopping: number = Number(ziel.value);
                    preis(0.30, preistopping, 0);
                } else {
                    document.getElementById("topping5").innerHTML = "";
                    let preistopping: number = 0;
                    preis(0.30, 0, preistopping);
                }
                break;
            }
            case ("Versandart"): {
                if (ziel.checked == true) {
                    document.getElementById("versandart").innerHTML = "Ihre gewählte Versandart: " + ziel.id;
                } else {
                    document.getElementById("versandart").innerHTML = "";
                }
                break;
            }

        }
        function preis(_hilfestellung: number, _preisaddition: number, _preissubstracion: number): void {
            gesamtpreis = gesamtpreis - _hilfestellung + _preisaddition - _preissubstracion;
            if (gesamtpreis < 0) {
                gesamtpreis = 0;
            }
            document.getElementById("gesamtpreis").innerHTML = "Der Gesamtpreis der Bestellung beträgt: " + gesamtpreis + "€";
        }
    }
}
