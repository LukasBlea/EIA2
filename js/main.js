document.addEventListener("funktionsname");

function funktionsname() {
    var name = prompt('Bitte nennen Sie mir Ihren Namen!')
}

console.log('Wilkommen' +name)

document.getElementById('namedID').innerHTML = "Wilkommen" +name + "!";