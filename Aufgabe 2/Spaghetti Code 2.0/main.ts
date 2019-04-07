function getRandomInt(_max: number) {
    return Math.floor(Math.random() * Math.floor(_max));
}

interface Karte {
    farbe: string;
    zeichen: string;
    zahl: number;
}

let sK7: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 7,
}

let sK8: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 8,
}

let sK9: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 9,
}

let sK10: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 10,
}

let sKB: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 11,
}

let sKD: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 12,
}

let sKK: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 13,
}

let sKA: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 14,
}

let gP7: Karte = {
    farbe: '<p class="grüneKarte">Grün</p>',
    zeichen: "♠",
    zahl: 7,
}

let gP8: Karte = {
    farbe: '<p class="grüneKarte">Grün</p>',
    zeichen: "♠",
    zahl: 8,
}

let gP9: Karte = {
    farbe: '<p class="grüneKarte">Grün</p>',
    zeichen: "♠",
    zahl: 9,
}

let gP10: Karte = {
    farbe: '<p class="grüneKarte">Grün</p>',
    zeichen: "♠",
    zahl: 10,
}

let gPB: Karte = {
    farbe: '<p class="grüneKarte">Grün</p>',
    zeichen: "♠",
    zahl: 11,
}

let gPD: Karte = {
    farbe: '<p class="grüneKarte">Grün</p>',
    zeichen: "♠",
    zahl: 12,
}

let gPK: Karte = {
    farbe: '<p class="grüneKarte">Grün</p>',
    zeichen: "♠",
    zahl: 13,
}

let gPA: Karte = {
    farbe: '<p class="grüneKarte">Grün</p>',
    zeichen: "♠",
    zahl: 14,
}

let rH7: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 7,
}

let rH8: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 8,
}

let rH9: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 9,
}

let rH10: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 10,
}

let rHB: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 11,
}

let rHD: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 12,
}

let rHK: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 13,
}

let rHA: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 14,
}

let oK7: Karte = {
    farbe: '<p class="orangeKarte">Orange</p>',
    zeichen: "♦",
    zahl: 7,
}

let oK8: Karte = {
    farbe: '<p class="orangeKarte">Orange</p>',
    zeichen: "♦",
    zahl: 8,
}

let oK9: Karte = {
    farbe: '<p class="orangeKarte">Orange</p>',
    zeichen: "♦",
    zahl: 9,
}

let oK10: Karte = {
    farbe: '<p class="orangeKarte">Orange</p>',
    zeichen: "♦",
    zahl: 10,
}

let oKB: Karte = {
    farbe: '<p class="orangeKarte">Orange</p>',
    zeichen: "♦",
    zahl: 11,
}

let oKD: Karte = {
    farbe: '<p class="orangeKarte">Orange</p>',
    zeichen: "♦",
    zahl: 12,
}

let oKK: Karte = {
    farbe: '<p class="orangeKarte">Orange</p>',
    zeichen: "♦",
    zahl: 13,
}

let oKA: Karte = {
    farbe: '<p class="orangeKarte">Orange</p>',
    zeichen: "♦",
    zahl: 14,
}

let deck: Karte [] = [sK7, sK8, sK9, sK10, sKB, sKD, sKK, sKA, gP7, gP8, gP9, gP10, gPB, gPD, gPK, gPA, rH7, rH8, rH9, rH10, rHB, rHD, rHK, rHA, oK7, oK8, oK9, oK10, oKB, oKD, oKK, oKA]

document.addEventListener("DOMContentLoaded", deckMischen)

function spielStart(deck: Karte[]) {
let kartenanzahl = prompt("Wie viele Karten hättest du gerne? (1-5 Karten)");
startKarten(deck, kartenanzahl, 0);
}

function startKarten(deck: Karte[], kartenanzahl: string, i: number): Karte[]{
    let handkarten: Karte[];
    switch (kartenanzahl) {
        case "1": {
            handkarten = deck.splice(0, 1);
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
    // karteZiehen(handkarten);
    //Würde funktionieren aber an falscher Stelle. Unsicher wie ich dies am besten implementieren könnte.
    return handkarten;
}

function deckMischen(){
    let zähler = deck.length;
    while (zähler > 0) {
        let index: number = Math.floor(Math.random()*zähler);
        zähler--;
        let temp: any = deck[zähler];
        deck[zähler] = deck[index];
        deck[index] = temp;
    }
    console.log(deck);
    spielStart(deck);
}

// Work in progress
function karteZiehen(handkarten: Karte[]) {
    let i: number = 0;
    let ziehen = deck.pop();
    handkarten = handkarten.concat(ziehen);
    while (i == 0) {
        if (deck.length == 0) {
        console.log("Es kann keine Karte mehr gezogen werden");
        } else {
            handkarten; 
            console.log("Gezogene Karte:", handkarten);
        }
        i++;
        console.log(handkarten);
    }
}
//

function writeHTML(handkarte: Karte, htmlID: string) {
    let prodElement = document.createElement('div');
    let elementstring = 
    `
    <div id="handkarte">
        <p class="zeichen">${handkarte.zeichen}</p>
        <p class="zahl">${handkarte.zahl}</p>
        ${handkarte.farbe}
    </div>
    `
    prodElement.innerHTML = elementstring;
    document.getElementById(htmlID).appendChild(prodElement);
}

// In Zusammenarbeit mit Elisabeth Haase