let herois = [
  { nome: "Labaxúrias", xp: 7500, genero: "F" },
  { nome: "Vrauzio Darella", xp: 9500, genero: "M" },
  { nome: "Decantalfs", xp: 12000, genero: "M" },
  { nome: "Lousango", xp: 850, genero: "M" },
  { nome: "Artemis", xp: 8500, genero: "F" }
];

for (let i = 0; i < herois.length; i++) {
  let nome = herois[i].nome;
  let xp = herois[i].xp;
  let genero = herois[i].genero; 
  let nivel = "";

  // Classificação
  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  let titulo = "";
  if (genero === "F") {
    titulo = "A guerreira " + nome;
  } else {
    titulo = "O guerreiro " + nome;
  }

  // Saida
  console.log(titulo + " está no nível " + nivel + " (XP: " + xp + ")");
}
