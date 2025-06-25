// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Eres una madre valiente", time: 10 },
  { text: "Eres alguien fuerte", time: 13 },
  { text: "Tu amor es mi mayor regalo", time: 16 },
  { text: "Nunca te ridas mamá", time: 19 },
  { text: "Tu eres mi mayor motivación", time: 22 },
  { text: "Tu me inspiras a no rendirme", time: 25 },
  { text: "Agradezo tu sacrificio", time: 28 },
  { text: "Tu amor es mi mayor regalo", time: 31 },
  { text: "Te mereces todo lo bueno en la vida", time: 34 },
  { text: "Gracias por estar aqui con nosotros", time: 37 },
  { text: "Eres quien a estado en los peores momentos", time: 41 },
  { text: "Eres el pilar que nos sostiene", time: 44 },
  { text: "De verdad muchas, MUCHAS GRACIAS", time: 47 },
  { text: "TE AMAMOS MUCHO ESMERALDA", time: 50 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);