namespace Aufgabe04 {

    let gesamtpreis: number = 0;

    window.addEventListener("load", init);

    function init(_event: Event): void {

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        document.getElementById("button").addEventListener("click", pressedButton);
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
                    eissorteTrue("eis1", "Erdbeere", 1);
                } else {
                    eissorteFalse("eis1", "Erdbeere", 0);
                }
                break;
            }

            case ("Vanille"): {
                if (ziel.checked == true) {
                    eissorteTrue("eis2", "Vanille", 1);
                } else {
                    eissorteFalse("eis2", "Vanille", 0);
                }
                break;
            }

            case ("Kokos"): {
                if (ziel.checked == true) {
                    eissorteTrue("eis3", "Kokos", 1);
                } else {
                    eissorteFalse("eis3", "Kokos", 0);
                }
                break;
            }

            case ("Himbeere"): {
                if (ziel.checked == true) {
                    eissorteTrue("eis4", "Himbeere", 1);
                } else {
                    eissorteFalse("eis4", "Himbeere", 0);
                }
                break;
            }

            case ("Schokolade"): {
                if (ziel.checked == true) {
                    eissorteTrue("eis5", "Schokolade", 1);
                } else {
                    eissorteFalse("eis5", "Schokolade", 0);
                }
                break;
            }

            case ("Apfel"): {
                if (ziel.checked == true) {
                    eissorteTrue("eis6", "Apfel", 1);
                } else {
                    eissorteFalse("eis6", "Apfel", 0);
                }
                break;
            }

            case ("Kiwi"): {
                if (ziel.checked == true) {
                    eissorteTrue("eis7", "Kiwi", 1);
                } else {
                    eissorteFalse("eis7", "Kiwi", 0);
                }
                break;
            }

            case ("Melone"): {
                if (ziel.checked == true) {
                    eissorteTrue("eis8", "Melone", 1);
                } else {
                    eissorteFalse("eis8", "Melone", 0);
                }
                break;
            }
            case ("Haselnuss"): {
                if (ziel.checked == true) {
                    eissorteTrue("eis9", "Haselnuss", 1);
                } else {
                    eissorteFalse("eis9", "Haselnuss", 0);
                }
                break;
            }
            case ("Zitrone"): {
                if (ziel.checked == true) {
                    eissorteTrue("eis10", "Zitrone", 1);
                } else {
                    eissorteFalse("eis10", "Zitrone", 0);
                }
                break;
            }
            case ("Waffel oder Becher"): {
                if (ziel.checked == true) {
                    document.getElementById("woderb").innerHTML = ziel.id + "," + "";
                } else {
                    document.getElementById("woderb").innerHTML = "";
                }
                break;
            }
            case("Portion Sahne"): {
                if (ziel.checked == true) {
                    eissorteTrue("topping1", "Portion Sahne", 0.5);
                } else {
                    eissorteFalse("topping1", "Portion Sahne", 0);
                }
                break;
            }
            case("Schokosoße"): {
                if (ziel.checked == true) {
                    eissorteTrue("topping2", "Schokosoße", 0.5);
                } else {
                    eissorteFalse("topping2", "Schokosoße", 0);
                }
                break;
            }
            case("Erdbeersoße"): {
                if (ziel.checked == true) {
                    eissorteTrue("topping3", "Erdbeersoße", 0.5);
                } else {
                    eissorteFalse("topping3", "Erdbeersoße", 0);
                }
                break;
            }
            case("Schokostreusel"): {
                if (ziel.checked == true) {
                    eissorteTrue("topping4", "Schokostreusel", 0.5);
                } else {
                    eissorteFalse("topping4", "Schokostreusel", 0);
                }
                break;
            }
            case("Gummibärchen"): {
                if (ziel.checked == true) {
                    eissorteTrue("topping5", "Gummibärchen", 0.5);
                } else {
                    eissorteFalse("topping5", "Gummibärchen", 0);
                }
                break;
            }
            case ("Lieferoption"): {
                if (ziel.checked == true) {
                    document.getElementById("versandart").innerHTML = "Ihre gewählte Versandart: " + ziel.id;
                } else {
                    document.getElementById("versandart").innerHTML = "";
                }
                break;
            }
        }
    }

    function eissorteTrue(_eisID: string, _eisname: string, _eispreis: number): void {
        document.getElementById(_eisID).innerHTML = "1x  " + _eisname + " " + "|";
        preis(0, _eispreis, 0);
    }

    function eissorteFalse(_eisID: string, _eisname: string, _eispreis: number): void {
        document.getElementById(_eisID).innerHTML = "";
        preis(1 , 0, _eispreis);
    }

    function preis(_hilfestellung: number, _preisaddition: number, _preissubstracion: number): void {
        gesamtpreis = gesamtpreis + _preisaddition - _preissubstracion - _hilfestellung;
        if (gesamtpreis < 0) {
            gesamtpreis = 0;
        }
        document.getElementById("gesamtpreis").innerHTML = "Der Gesamtpreis der Bestellung beträgt: " + gesamtpreis + "€";
    }

    function pressedButton(_event: Event): void {
        let ziel: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("pressed");
        if (gesamtpreis == 0 || ziel.required == false || ziel.labels == undefined) {
            document.getElementById("buttonangaben").innerHTML = "Es wurden wichtige Daten noch nicht ausgefüllt";
        } else {
            document.getElementById("buttonangaben").innerHTML = "";
        }
    }  
}
