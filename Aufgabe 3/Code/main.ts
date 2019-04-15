namespace Aufgabe3 {
    interface Karte {
        farbe: string;
        zeichen: string;
        zahl: number;
        rang: number;
    }

    let sK7: Karte = {
        farbe: "<p class='schwarzeKarte' target='click' >Schwarz</p>",
        zeichen: "♣",
        zahl: 7,
        rang: 1
    };

    let sK8: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♣",
        zahl: 8,
        rang: 2
    };

    let sK9: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♣",
        zahl: 9,
        rang: 3
    };

    let sK10: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♣",
        zahl: 10,
        rang: 4
    };

    let sKB: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♣",
        zahl: 11,
        rang: 5
    };

    let sKD: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♣",
        zahl: 12,
        rang: 6
    };

    let sKK: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♣",
        zahl: 13,
        rang: 7
    };

    let sKA: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♣",
        zahl: 14,
        rang: 8
    };

    let sP7: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♠",
        zahl: 7,
        rang: 9
    };

    let sP8: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♠",
        zahl: 8,
        rang: 10
    };

    let sP9: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♠",
        zahl: 9,
        rang: 11
    };

    let sP10: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♠",
        zahl: 10,
        rang: 12
    };

    let sPB: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♠",
        zahl: 11,
        rang: 13
    };

    let sPD: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♠",
        zahl: 12,
        rang: 14
    };

    let sPK: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♠",
        zahl: 13,
        rang: 15
    };

    let sPA: Karte = {
        farbe: "<p class='schwarzeKarte'>Schwarz</p>",
        zeichen: "♠",
        zahl: 14,
        rang: 16
    };

    let rH7: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♥",
        zahl: 7,
        rang: 17
    };

    let rH8: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♥",
        zahl: 8,
        rang: 18
    };

    let rH9: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♥",
        zahl: 9,
        rang: 19
    };

    let rH10: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♥",
        zahl: 10,
        rang: 20
    };

    let rHB: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♥",
        zahl: 11,
        rang: 21
    };

    let rHD: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♥",
        zahl: 12,
        rang: 22
    };

    let rHK: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♥",
        zahl: 13,
        rang: 23
    };

    let rHA: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♥",
        zahl: 14,
        rang: 24
    };

    let rK7: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♦",
        zahl: 7,
        rang: 25
    };

    let rK8: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♦",
        zahl: 8,
        rang: 26
    };

    let rK9: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♦",
        zahl: 9,
        rang: 27
    };

    let rK10: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♦",
        zahl: 10,
        rang: 28
    };

    let rKB: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♦",
        zahl: 11,
        rang: 29
    };

    let rKD: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♦",
        zahl: 12,
        rang: 30
    };

    let rKK: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♦",
        zahl: 13,
        rang: 31
    };

    let rKA: Karte = {
        farbe: "<p class='roteKarte'>Rot</p>",
        zeichen: "♦",
        zahl: 14,
        rang: 32
    };

    let deck: Karte[] = [sK7, sK8, sK9, sK10, sKB, sKD, sKK, sKA, sP7, sP8, sP9, sP10, sPB, sPD, sPK, sPA, rH7, rH8, rH9, rH10, rHB, rHD, rHK, rHA, rK7, rK8, rK9, rK10, rKB, rKD, rKK, rKA];

    let handkarten: Karte[] = [];

    document.addEventListener("DOMContentLoaded", deckMischen);
    document.addEventListener("DOMContentLoaded", interaktiv);

    function interaktiv() {
        document.getElementById("zeichensort").addEventListener("click", renderSortRang); //passt
        document.getElementById("deck").addEventListener("click", karteZiehen); //passt
        document.getElementById("handkarten").addEventListener("click", handkarteSpielen);
        document.getElementById("zahlsort").addEventListener("click", sortArrayZahl); //passt
        document.addEventListener("keydown", leertaste); //passt
    }

    function deckMischen(): void {
        let zähler: number = deck.length;
        while (zähler > 0) {
            let index: number = Math.floor(Math.random() * zähler);
            zähler--;
            let temp: Karte = deck[zähler];
            deck[zähler] = deck[index];
            deck[index] = temp;
        }
        console.log(deck);
        spielStart();
    }

    function spielStart(): void {
        let kartenanzahl: string = prompt("Wie viele Karten hättest du gerne? (1-5 Karten)");
        startKarten(kartenanzahl);
    }

    function startKarten(kartenanzahl: string): void {
        let i: number = 0;
        switch (kartenanzahl) {
            case "1": {
                handkarten = deck.splice(0, 1);
                console.log(handkarten);
                writeHTML(handkarten[i], "handkarten");
            }
                break;
            case "2": {
                handkarten = deck.splice(0, 2);
                console.log(handkarten);
            }
                while (handkarten.length > i) {
                    writeHTML(handkarten[i], "handkarten");
                    i++;
                }
                break;
            case "3": {
                handkarten = deck.splice(0, 3);
                console.log(handkarten);
            }
                while (handkarten.length > i) {
                    writeHTML(handkarten[i], "handkarten");
                    i++;
                }
                break;
            case "4": {
                handkarten = deck.splice(0, 4);
                console.log(handkarten);
            }
                while (handkarten.length > i) {
                    writeHTML(handkarten[i], "handkarten");
                    i++;
                }
                break;
            default:
            case "5": {
                handkarten = deck.splice(0, 5);
                console.log(handkarten);
            }
                while (handkarten.length > i) {
                    writeHTML(handkarten[i], "handkarten");
                    i++;
                }
                break;
        }
        console.log("Alles erfolgreich generiert.");
    }

    function writeHTML(handkarte: Karte, htmlID: string): void {
        // tslint:disable-next-line: typedef
        let prodElement = document.createElement("div");
        // tslint:disable-next-line:typedef
        let elementstring =
            `
        <div id="handkarte">
        <p class="zeichen">${handkarte.zeichen}</p>
        `;
        if (handkarte.zahl > 10) {
            switch (handkarte.zahl) {
                case 11: {
                    let bube: string = "B";
                    elementstring += `<p class="zahl">${bube}</p>`;
                    console.log("Bube");
                }
                    break;
                case 12: {
                    let dame: string = "D";
                    elementstring += `<p class="zahl">${dame}</p>`;
                }
                    break;
                case 13: {
                    let koenig: string = "K";
                    elementstring += `<p class="zahl">${koenig}</p>`;
                }
                    break;
                case 14: {
                    let ass: string = "A";
                    elementstring += `<p class="zahl">${ass}</p>`;
                }
                    break;
            }
        } else {
            elementstring += `<p class="zahl">${handkarte.zahl}</p>`;
        }
        elementstring += `${handkarte.farbe}
        </div>`;
        prodElement.innerHTML = elementstring;
        document.getElementById(htmlID).appendChild(prodElement);
    }


    function karteZiehen(): Karte[] {
        let i: number = 0;
        let ziehen: Karte = deck.pop();
        handkarten = handkarten.concat(ziehen);
        while (i == 0) {
            if (deck.length == 0) {
                console.log("Es kann keine Karte mehr gezogen werden");
            } else {
                console.log("Gezogene Karte:", handkarten);
                document.getElementById("handkarten").innerHTML = "";
                for (let i: number = 0; i < handkarten.length; i++) {
                    writeHTML(handkarten[i], "handkarten");
                }

            }
            i++;
        }
        return handkarten;
    }


    function sortArrayZahl(): void {
        handkarten.sort((a, b) => a.zahl - b.zahl);
        document.getElementById("handkarten").innerHTML = "";
        for (let i: number = 0; i < handkarten.length; i++) {
            writeHTML(handkarten[i], "handkarten");
        }
    }

    function sortArrayRang(): void {
        handkarten.sort(rangSortieren);
    }

    function rangSortieren(_a: Karte, _b: Karte): number {
        if (_a.rang < _b.rang) {
            return -1;
        }
        if (_a.rang > _b.rang) {
            return 1;
        }
        if (_a.rang == _b.rang) {
            return 0;
        }
    }

    function renderSortRang(): void {
        sortArrayRang();
        document.getElementById("handkarten").innerHTML = "";
        for (let i: number = 0; i < handkarten.length; i++) {
            writeHTML(handkarten[i], "handkarten");
        }
    }

    function handkarteSpielen(): void {
        console.log("Handkarte Spielen");
        let ablegestapel: Karte[] = handkarten.splice(0, 1);
        document.getElementById("ablegestapel").innerHTML = "";
        writeHTML(ablegestapel[0], "ablegestapel");
        document.getElementById("handkarten").innerHTML = "";
        for (let i: number = 0; i < handkarten.length; i++) {
            writeHTML(handkarten[i], "handkarten");
        }
    }

    function leertaste(_event: KeyboardEvent): void {
        if (_event.keyCode == 32) {
            karteZiehen();
        }
    }

    // In Zusammenarbeit mit Elisabeth Haase
}