namespace Aufgabe05 {

    interface PredefinedEis {
        type: string;
        name: string;
        step: string;
        min: string;
        max: string;
        value: number;
        eisname: string;
        preis: number;
    }

    export interface HomogenesEisArray {
        [eiskey: string]: PredefinedEis[];
    }

    window.addEventListener("load", init);

    let gesamtpreis: number = 0;

    function init(_event: Event): void {
        document.getElementById("button").addEventListener("click", pressedButton);
        document.getElementById("formular").addEventListener("click", formularSenden);
        displayFlexiblesEis(eis);
    }

    function formularSenden(_event: Event): void {
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < inputs.length; i++) {
            let input: HTMLInputElement = inputs[i];
            if (input.checked == true) {
                switch (input.id) {
                    case ("Becher"): {
                        input.setAttribute("value", "Becher");
                    }
                                     break;
                    case ("Waffel"): {
                        input.setAttribute("value", "Waffel");
                    }
                                     break;
                    case ("Selbstabholung"): {
                        input.setAttribute("value", "Selbstabholung");
                    }
                                             break;
                    case ("DHL"): {
                        input.setAttribute("value", "DHL");
                    }
                }
            } 
        }
    }

    function pressedButton(_event: Event): void {
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < inputs.length; i++) {
            let input: HTMLInputElement = inputs[i];
            if (input.getAttribute("lieferdaten") == "true") {
                if (gesamtpreis == 0 || input.value == "") {
                    document.getElementById("buttonangaben").innerHTML = "Kein 🍦 für dich :(";
                } else {
                    document.getElementById("buttonangaben").innerHTML = "Du bist cool drauf 😎";
                }
            }
        }
    }

    function displayFlexiblesEis(_homogeneseisarray: HomogenesEisArray): void {
        for (let eiskey in _homogeneseisarray) {
            let zwischenspeicher: PredefinedEis[] = _homogeneseisarray[eiskey];
            for (let i: number = 0; i < zwischenspeicher.length; i++) {
                eisGenerierung(zwischenspeicher[i], eiskey);
            }
        }
    }

    function eisGenerierung(_heteroPredefinedEis: PredefinedEis, _eiskey: string): void {
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        label.setAttribute("for", _heteroPredefinedEis.eisname);
        label.innerText = " " + _heteroPredefinedEis.eisname;
        if (_eiskey == "Eissorten") {
            input.setAttribute("checked", "checked");
        }
        input.setAttribute("type", _heteroPredefinedEis.type);
        input.setAttribute("name", _heteroPredefinedEis.name);
        input.setAttribute("step", _heteroPredefinedEis.step);
        input.setAttribute("min", _heteroPredefinedEis.min);
        input.setAttribute("max", _heteroPredefinedEis.max);
        input.setAttribute("id", _heteroPredefinedEis.eisname);
        input.setAttribute("value", _heteroPredefinedEis.value.toString());
        input.setAttribute("alt", _heteroPredefinedEis.preis.toString());
        document.getElementById("eis").appendChild(input);
        document.getElementById("eis").appendChild(label);
    }
}