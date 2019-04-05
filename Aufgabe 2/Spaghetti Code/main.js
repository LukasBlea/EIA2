function getRandomInt(_max) {
    return Math.floor(Math.random() * Math.floor(_max));
}
let sK7 = {
    farbe: "#040404",
    zeichen: "kreuz",
    zahl: 7,
};
let sK8 = {
    farbe: "#040404",
    zeichen: "kreuz",
    zahl: 8,
};
let sK9 = {
    farbe: "#040404",
    zeichen: "kreuz",
    zahl: 9,
};
let sK10 = {
    farbe: "#040404",
    zeichen: "kreuz",
    zahl: 10,
};
let sKB = {
    farbe: "#040404",
    zeichen: "kreuz",
    zahl: 11,
};
let sKD = {
    farbe: "#040404",
    zeichen: "kreuz",
    zahl: 12,
};
let sKK = {
    farbe: "#040404",
    zeichen: "kreuz",
    zahl: 13,
};
let sKA = {
    farbe: "#040404",
    zeichen: "kreuz",
    zahl: 14,
};
let gP7 = {
    farbe: "#31E72E",
    zeichen: "pik",
    zahl: 7,
};
let gP8 = {
    farbe: "#31E72E",
    zeichen: "pik",
    zahl: 8,
};
let gP9 = {
    farbe: "#31E72E",
    zeichen: "pik",
    zahl: 9,
};
let gP10 = {
    farbe: "#31E72E",
    zeichen: "pik",
    zahl: 10,
};
let gPB = {
    farbe: "#31E72E",
    zeichen: "pik",
    zahl: 11,
};
let gPD = {
    farbe: "#31E72E",
    zeichen: "pik",
    zahl: 12,
};
let gPK = {
    farbe: "#31E72E",
    zeichen: "pik",
    zahl: 13,
};
let gPA = {
    farbe: "#31E72E",
    zeichen: "pik",
    zahl: 14,
};
let rH7 = {
    farbe: "#EF1111",
    zeichen: "herz",
    zahl: 7,
};
let rH8 = {
    farbe: "#EF1111",
    zeichen: "herz",
    zahl: 8,
};
let rH9 = {
    farbe: "#EF1111",
    zeichen: "herz",
    zahl: 9,
};
let rH10 = {
    farbe: "#EF1111",
    zeichen: "herz",
    zahl: 10,
};
let rHB = {
    farbe: "#EF1111",
    zeichen: "herz",
    zahl: 11,
};
let rHD = {
    farbe: "#EF1111",
    zeichen: "herz",
    zahl: 12,
};
let rHK = {
    farbe: "#EF1111",
    zeichen: "herz",
    zahl: 13,
};
let rHA = {
    farbe: "#EF1111",
    zeichen: "herz",
    zahl: 14,
};
let oK7 = {
    farbe: "#F8A100",
    zeichen: "karo",
    zahl: 7,
};
let oK8 = {
    farbe: "#F8A100",
    zeichen: "karo",
    zahl: 8,
};
let oK9 = {
    farbe: "#F8A100",
    zeichen: "karo",
    zahl: 9,
};
let oK10 = {
    farbe: "#F8A100",
    zeichen: "karo",
    zahl: 10,
};
let oKB = {
    farbe: "#F8A100",
    zeichen: "karo",
    zahl: 11,
};
let oKD = {
    farbe: "#F8A100",
    zeichen: "karo",
    zahl: 12,
};
let oKK = {
    farbe: "#F8A100",
    zeichen: "karo",
    zahl: 13,
};
let oKA = {
    farbe: "#F8A100",
    zeichen: "karo",
    zahl: 14,
};
let deck = [sK7, sK8, sK9, sK10, sKB, sKD, sKK, sKA, gP7, gP8, gP9, gP10, gPB, gPD, gPK, gPA, rH7, rH8, rH9, rH10, rHB, rHD, rHK, rHA, oK7, oK8, oK9, oK10, oKB, oKD, oKK, oKA];
document.addEventListener("DOMContentLoaded", deckMischen);
function spielStart(deck) {
    let kartenanzahl = prompt("Wie viele Karten hättest du gerne?");
    document.getElementById("spielStart").innerHTML = kartenanzahl;
    startKarten(deck, kartenanzahl, 0);
}
function startKarten(deck, kartenanzahl, i) {
    let handkarten;
    switch (kartenanzahl) {
        case "1":
            {
                handkarten = deck.splice(0, 1);
                writeHTML(handkarten[i], "handkarte");
            }
            break;
        case "2":
            {
                handkarten = deck.splice(0, 2);
                console.log(handkarten);
            }
            while (handkarten.length > i) {
                writeHTML(handkarten[i], "handkarte");
                i++;
            }
            break;
        case "3":
            {
                handkarten = deck.splice(0, 3);
                console.log(handkarten);
            }
            while (handkarten.length > i) {
                writeHTML(handkarten[i], "handkarte");
                i++;
            }
            break;
        case "4":
            {
                handkarten = deck.splice(0, 4);
                console.log(handkarten);
            }
            while (handkarten.length > i) {
                writeHTML(handkarten[i], "handkarte");
                i++;
            }
            break;
        case "5":
            {
                handkarten = deck.splice(0, 5);
                console.log(handkarten);
            }
            while (handkarten.length > i) {
                writeHTML(handkarten[i], "handkarte");
                i++;
            }
            break;
    }
    console.log("Alles erfolgreich generiert.");
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
function karteZiehen(i) {
    i = 0;
    let ziehen = deck.pop();
    let handkarte = ziehen;
    while (i == 0) {
        if (deck.length == 0) {
            console.log("Es kann keine Karte mehr gezogen werden");
        }
        else {
            handkarte;
            console.log("Gezogene Karte:", handkarte);
        }
        i++;
    }
}
function writeHTML(handkarte, htmlID) {
    let prodElement = document.createElement('div');
    let elementstring = `
    <div id="handkarte">
        <p>${handkarte.zeichen}</p>
        <p>${handkarte.zahl}</p>
        <p>${handkarte.farbe}</p>
    </div>
    `;
    prodElement.innerHTML = elementstring;
    document.getElementById(htmlID).appendChild(prodElement);
}
//# sourceMappingURL=main.js.map