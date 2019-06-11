let sK7 = {
    farbe: "<p class='schwarzeKarte' target='click' >Schwarz</p>",
    zeichen: "♣",
    zahl: 7,
    rang: 1
};
let sK8 = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♣",
    zahl: 8,
    rang: 2
};
let sK9 = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♣",
    zahl: 9,
    rang: 3
};
let sK10 = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♣",
    zahl: 10,
    rang: 4
};
let sKB = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♣",
    zahl: 11,
    rang: 5
};
let sKD = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♣",
    zahl: 12,
    rang: 6
};
let sKK = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♣",
    zahl: 13,
    rang: 7
};
let sKA = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♣",
    zahl: 14,
    rang: 8
};
let sP7 = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♠",
    zahl: 7,
    rang: 9
};
let sP8 = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♠",
    zahl: 8,
    rang: 10
};
let sP9 = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♠",
    zahl: 9,
    rang: 11
};
let sP10 = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♠",
    zahl: 10,
    rang: 12
};
let sPB = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♠",
    zahl: 11,
    rang: 13
};
let sPD = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♠",
    zahl: 12,
    rang: 14
};
let sPK = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♠",
    zahl: 13,
    rang: 15
};
let sPA = {
    farbe: "<p class='schwarzeKarte'>Schwarz</p>",
    zeichen: "♠",
    zahl: 14,
    rang: 16
};
let rH7 = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♥",
    zahl: 7,
    rang: 17
};
let rH8 = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♥",
    zahl: 8,
    rang: 18
};
let rH9 = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♥",
    zahl: 9,
    rang: 19
};
let rH10 = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♥",
    zahl: 10,
    rang: 20
};
let rHB = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♥",
    zahl: 11,
    rang: 21
};
let rHD = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♥",
    zahl: 12,
    rang: 22
};
let rHK = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♥",
    zahl: 13,
    rang: 23
};
let rHA = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♥",
    zahl: 14,
    rang: 24
};
let rK7 = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♦",
    zahl: 7,
    rang: 25
};
let rK8 = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♦",
    zahl: 8,
    rang: 26
};
let rK9 = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♦",
    zahl: 9,
    rang: 27
};
let rK10 = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♦",
    zahl: 10,
    rang: 28
};
let rKB = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♦",
    zahl: 11,
    rang: 29
};
let rKD = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♦",
    zahl: 12,
    rang: 30
};
let rKK = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♦",
    zahl: 13,
    rang: 31
};
let rKA = {
    farbe: "<p class='roteKarte'>Rot</p>",
    zeichen: "♦",
    zahl: 14,
    rang: 32
};
let deck = [sK7, sK8, sK9, sK10, sKB, sKD, sKK, sKA, sP7, sP8, sP9, sP10, sPB, sPD, sPK, sPA, rH7, rH8, rH9, rH10, rHB, rHD, rHK, rHA, rK7, rK8, rK9, rK10, rKB, rKD, rKK, rKA];
let handkarten = [];
let ablegestapel = [];
document.addEventListener("DOMContentLoaded", deckMischen);
let button = document.addEventListener("click", renderSortRang);
//let div: HTMLDivElement = <HTMLDivElement><unknown>document.addEventListener("click", karteZiehen());
function deckMischen() {
    let zähler = deck.length;
    while (zähler > 0) {
        let index = Math.floor(Math.random() * zähler);
        zähler--;
        let temp = deck[zähler];
        deck[zähler] = deck[index];
        deck[index] = temp;
    }
    console.log(deck);
    spielStart();
}
function spielStart() {
    let kartenanzahl = prompt("Wie viele Karten hättest du gerne? (1-5 Karten)");
    startKarten(kartenanzahl);
}
function startKarten(kartenanzahl) {
    let i = 0;
    switch (kartenanzahl) {
        case "1":
            {
                handkarten = deck.splice(0, 1);
                console.log(handkarten);
                writeHTML(handkarten[i], "handkarten");
            }
            break;
        case "2":
            {
                handkarten = deck.splice(0, 2);
                console.log(handkarten);
            }
            while (handkarten.length > i) {
                writeHTML(handkarten[i], "handkarten");
                i++;
            }
            break;
        case "3":
            {
                handkarten = deck.splice(0, 3);
                console.log(handkarten);
            }
            while (handkarten.length > i) {
                writeHTML(handkarten[i], "handkarten");
                i++;
            }
            break;
        case "4":
            {
                handkarten = deck.splice(0, 4);
                console.log(handkarten);
            }
            while (handkarten.length > i) {
                writeHTML(handkarten[i], "handkarten");
                i++;
            }
            break;
        default:
        case "5":
            {
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
function writeHTML(handkarte, htmlID) {
    let prodElement = document.createElement("div");
    // tslint:disable-next-line:typedef
    let elementstring = `
    <div id="handkarte">
        <p class="zeichen">${handkarte.zeichen}</p>
        <p class="zahl">${handkarte.zahl}</p>
        ${handkarte.farbe}
    </div>
    `;
    prodElement.innerHTML = elementstring;
    document.getElementById(htmlID).appendChild(prodElement);
}
function karteZiehen() {
    let i = 0;
    let ziehen = deck.pop();
    handkarten = handkarten.concat(ziehen);
    while (i == 0) {
        if (deck.length == 0) {
            console.log("Es kann keine Karte mehr gezogen werden");
        }
        else {
            console.log("Gezogene Karte:", handkarten);
        }
        i++;
    }
    return handkarten;
}
function sortArrayZahl() {
    handkarten.sort((a, b) => a.zahl - b.zahl);
    console.log(handkarten.map(karte => karte.zahl));
}
function sortArrayRang() {
    handkarten.sort(rangSortieren);
}
function rangSortieren(_a, _b) {
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
function renderSortRang() {
    sortArrayRang();
    document.getElementById("handkarten").innerHTML = "";
    for (let i = 0; i < handkarten.length; i++) {
        writeHTML(handkarten[i], "handkarten");
    }
}
function handkarteSpielen() {
    let i = 1;
    let ablegestapel = handkarten.splice(0, 1);
    document.getElementById("ablegestapel").innerHTML = "";
    if (i == ablegestapel.length) {
        writeHTML(ablegestapel[0], "ablegestapel");
    }
    else {
        console.log("OMEGALUL");
    }
}
// In Zusammenarbeit mit Elisabeth Haase
//# sourceMappingURL=main.js.map