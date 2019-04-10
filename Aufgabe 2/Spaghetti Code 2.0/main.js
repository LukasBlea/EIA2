let sK7 = {
    farbe: '<p class="schwarzeKarte" target="click" >Schwarz</p>',
    zeichen: "♣",
    zahl: 7,
};
let sK8 = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 8,
};
let sK9 = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 9,
};
let sK10 = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 10,
};
let sKB = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 11,
};
let sKD = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 12,
};
let sKK = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 13,
};
let sKA = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 14,
};
let sP7 = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 7,
};
let sP8 = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 8,
};
let sP9 = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 9,
};
let sP10 = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 10,
};
let sPB = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 11,
};
let sPD = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 12,
};
let sPK = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 13,
};
let sPA = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 14,
};
let rH7 = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 7,
};
let rH8 = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 8,
};
let rH9 = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 9,
};
let rH10 = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 10,
};
let rHB = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 11,
};
let rHD = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 12,
};
let rHK = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 13,
};
let rHA = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 14,
};
let rK7 = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 7,
};
let rK8 = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 8,
};
let rK9 = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 9,
};
let rK10 = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 10,
};
let rKB = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 11,
};
let rKD = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 12,
};
let rKK = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 13,
};
let rKA = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 14,
};
let deck = [sK7, sK8, sK9, sK10, sKB, sKD, sKK, sKA, sP7, sP8, sP9, sP10, sPB, sPD, sPK, sPA, rH7, rH8, rH9, rH10, rHB, rHD, rHK, rHA, rK7, rK8, rK9, rK10, rKB, rKD, rKK, rKA];
let handkarten = [];
document.addEventListener("DOMContentLoaded", deckMischen);
function spielStart(deck) {
    let kartenanzahl = prompt("Wie viele Karten hättest du gerne? (1-5 Karten)");
    startKarten(deck, kartenanzahl, 0);
}
function startKarten(deck, kartenanzahl, i) {
    let handkarten;
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
    // karteZiehen(handkarten);
    //Würde funktionieren aber an falscher Stelle. Unsicher wie ich dies am besten implementieren könnte.
    return handkarten;
}
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
    spielStart(deck);
}
// Work in progress
function karteZiehen(_handkarten) {
    let i = 0;
    let ziehen = deck.pop();
    handkarten = handkarten.concat(ziehen);
    while (i == 0) {
        if (deck.length == 0) {
            console.log("Es kann keine Karte mehr gezogen werden");
        }
        else {
            handkarten;
            console.log("Gezogene Karte:", handkarten);
        }
        i++;
        console.log(handkarten);
    }
}
//
function writeHTML(handkarte, htmlID) {
    let prodElement = document.createElement('div');
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
// In Zusammenarbeit mit Elisabeth Haase
//# sourceMappingURL=main.js.map