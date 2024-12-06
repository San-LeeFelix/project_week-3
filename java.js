const greetingElement = document.getElementById('greeting');
const currentHour = new Date().getHours();

if (currentHour < 12) {
    greetingElement.textContent = "Goedemorgen!";
} else if (currentHour < 18) {
    greetingElement.textContent = "Goedemiddag!";
} else {
    greetingElement.textContent = "Goedenacht!";
}

function myFunction() {
    var txt;
    if (confirm("JE HEBT GEKLIKT NU NOG OK")) {
      txt = "YIPPIEEE";
    } else {
      txt = "Waarom weg geklikt :(";
    }
    document.getElementById("knopje").innerHTML = txt;
}