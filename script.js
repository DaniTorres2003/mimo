const leticia = document.getElementById('leticia');
const pedro = document.getElementById('pedro');
const rhyan = document.getElementById('rhyan');
const thales = document.getElementById('thales');
const alvaro = document.getElementById('alvaro');
const renan = document.getElementById('renan');
const daniel = document.getElementById('daniel');
const arthur = document.getElementById('arthur');
const elizeu = document.getElementById('elizeu');

let count = 0;

leticia.addEventListener("click", () => {
  switch (count) {
    case 0:
      leticia.classList.add('leticia', 'foto-clicada');
      pedro.classList.add('foto-nao-clicada');
      rhyan.classList.add('foto-nao-clicada');
      thales.classList.add('foto-nao-clicada');
      alvaro.classList.add('foto-nao-clicada');
      renan.classList.add('foto-nao-clicada');
      daniel.classList.add('foto-nao-clicada');
      arthur.classList.add('foto-nao-clicada');
      elizeu.classList.add('foto-nao-clicada');
      count = 1;
      break;
    case 1:
      leticia.classList.remove('leticia', 'foto-clicada');
      pedro.classList.remove('foto-nao-clicada');
      rhyan.classList.remove('foto-nao-clicada');
      thales.classList.remove('foto-nao-clicada');
      alvaro.classList.remove('foto-nao-clicada');
      renan.classList.remove('foto-nao-clicada');
      daniel.classList.remove('foto-nao-clicada');
      arthur.classList.remove('foto-nao-clicada');
      elizeu.classList.remove('foto-nao-clicada');
      count = 0;
      break;
  }
});

pedro.addEventListener("click", () => {
  switch (count) {
    case 0:
      pedro.classList.add('pedro', 'foto-clicada');
      leticia.classList.add('foto-nao-clicada');
      rhyan.classList.add('foto-nao-clicada');
      thales.classList.add('foto-nao-clicada');
      alvaro.classList.add('foto-nao-clicada');
      renan.classList.add('foto-nao-clicada');
      daniel.classList.add('foto-nao-clicada');
      arthur.classList.add('foto-nao-clicada');
      elizeu.classList.add('foto-nao-clicada');
      count = 1;
      break;
    case 1:
      pedro.classList.remove('pedro', 'foto-clicada');
      leticia.classList.remove('foto-nao-clicada');
      rhyan.classList.remove('foto-nao-clicada');
      thales.classList.remove('foto-nao-clicada');
      alvaro.classList.remove('foto-nao-clicada');
      renan.classList.remove('foto-nao-clicada');
      daniel.classList.remove('foto-nao-clicada');
      arthur.classList.remove('foto-nao-clicada');
      elizeu.classList.remove('foto-nao-clicada');
      count = 0;
      break;
  }
});

rhyan.addEventListener("click", () => {
  switch (count) {
    case 0:
      rhyan.classList.add('rhyan', 'foto-clicada');
      leticia.classList.add('foto-nao-clicada');
      pedro.classList.add('foto-nao-clicada');
      thales.classList.add('foto-nao-clicada');
      alvaro.classList.add('foto-nao-clicada');
      renan.classList.add('foto-nao-clicada');
      daniel.classList.add('foto-nao-clicada');
      arthur.classList.add('foto-nao-clicada');
      elizeu.classList.add('foto-nao-clicada');
      count = 1;
      break;
    case 1:
      rhyan.classList.remove('rhyan', 'foto-clicada');
      leticia.classList.remove('foto-nao-clicada');
      pedro.classList.remove('foto-nao-clicada');
      thales.classList.remove('foto-nao-clicada');
      alvaro.classList.remove('foto-nao-clicada');
      renan.classList.remove('foto-nao-clicada');
      daniel.classList.remove('foto-nao-clicada');
      arthur.classList.remove('foto-nao-clicada');
      elizeu.classList.remove('foto-nao-clicada');
      count = 0;
      break;
  }
});

thales.addEventListener("click", () => {
  switch (count) {
    case 0:
      thales.classList.add('thales', 'foto-clicada');
      leticia.classList.add('foto-nao-clicada');
      pedro.classList.add('foto-nao-clicada');
      rhyan.classList.add('foto-nao-clicada');
      alvaro.classList.add('foto-nao-clicada');
      renan.classList.add('foto-nao-clicada');
      daniel.classList.add('foto-nao-clicada');
      arthur.classList.add('foto-nao-clicada');
      elizeu.classList.add('foto-nao-clicada');
      count = 1;
      break;
    case 1:
      thales.classList.remove('thales', 'foto-clicada');
      leticia.classList.remove('foto-nao-clicada');
      pedro.classList.remove('foto-nao-clicada');
      rhyan.classList.remove('foto-nao-clicada');
      alvaro.classList.remove('foto-nao-clicada');
      renan.classList.remove('foto-nao-clicada');
      daniel.classList.remove('foto-nao-clicada');
      arthur.classList.remove('foto-nao-clicada');
      elizeu.classList.remove('foto-nao-clicada');
      count = 0;
      break;
  }
});

alvaro.addEventListener("click", () => {
  switch (count) {
    case 0:
      alvaro.classList.add('alvaro', 'foto-clicada');
      leticia.classList.add('foto-nao-clicada');
      pedro.classList.add('foto-nao-clicada');
      rhyan.classList.add('foto-nao-clicada');
      thales.classList.add('foto-nao-clicada');
      renan.classList.add('foto-nao-clicada');
      daniel.classList.add('foto-nao-clicada');
      arthur.classList.add('foto-nao-clicada');
      elizeu.classList.add('foto-nao-clicada');
      count = 1;
      break;
    case 1:
      alvaro.classList.remove('alvaro', 'foto-clicada');
      leticia.classList.remove('foto-nao-clicada');
      pedro.classList.remove('foto-nao-clicada');
      rhyan.classList.remove('foto-nao-clicada');
      thales.classList.remove('foto-nao-clicada');
      renan.classList.remove('foto-nao-clicada');
      daniel.classList.remove('foto-nao-clicada');
      arthur.classList.remove('foto-nao-clicada');
      elizeu.classList.remove('foto-nao-clicada');
      count = 0;
      break;
  }
});

renan.addEventListener("click", () => {
  switch (count) {
    case 0:
      renan.classList.add('renan', 'foto-clicada');
      leticia.classList.add('foto-nao-clicada');
      pedro.classList.add('foto-nao-clicada');
      rhyan.classList.add('foto-nao-clicada');
      thales.classList.add('foto-nao-clicada');
      alvaro.classList.add('foto-nao-clicada');
      daniel.classList.add('foto-nao-clicada');
      arthur.classList.add('foto-nao-clicada');
      elizeu.classList.add('foto-nao-clicada');
      count = 1;
      break;
    case 1:
      renan.classList.remove('renan', 'foto-clicada');
      leticia.classList.remove('foto-nao-clicada');
      pedro.classList.remove('foto-nao-clicada');
      rhyan.classList.remove('foto-nao-clicada');
      thales.classList.remove('foto-nao-clicada');
      alvaro.classList.remove('foto-nao-clicada');
      daniel.classList.remove('foto-nao-clicada');
      arthur.classList.remove('foto-nao-clicada');
      elizeu.classList.remove('foto-nao-clicada');
      count = 0;
      break;
  }
});

daniel.addEventListener("click", () => {
  switch (count) {
    case 0:
      daniel.classList.add('daniel', 'foto-clicada');
      leticia.classList.add('foto-nao-clicada');
      pedro.classList.add('foto-nao-clicada');
      rhyan.classList.add('foto-nao-clicada');
      thales.classList.add('foto-nao-clicada');
      alvaro.classList.add('foto-nao-clicada');
      renan.classList.add('foto-nao-clicada');
      arthur.classList.add('foto-nao-clicada');
      elizeu.classList.add('foto-nao-clicada');
      count = 1;
      break;
    case 1:
      daniel.classList.remove('daniel', 'foto-clicada');
      leticia.classList.remove('foto-nao-clicada');
      pedro.classList.remove('foto-nao-clicada');
      rhyan.classList.remove('foto-nao-clicada');
      thales.classList.remove('foto-nao-clicada');
      alvaro.classList.remove('foto-nao-clicada');
      renan.classList.remove('foto-nao-clicada');
      arthur.classList.remove('foto-nao-clicada');
      elizeu.classList.remove('foto-nao-clicada');
      count = 0;
      break;
  }
});

arthur.addEventListener("click", () => {
  switch (count) {
    case 0:
      arthur.classList.add('arthur', 'foto-clicada');
      leticia.classList.add('foto-nao-clicada');
      pedro.classList.add('foto-nao-clicada');
      rhyan.classList.add('foto-nao-clicada');
      thales.classList.add('foto-nao-clicada');
      alvaro.classList.add('foto-nao-clicada');
      renan.classList.add('foto-nao-clicada');
      daniel.classList.add('foto-nao-clicada');
      elizeu.classList.add('foto-nao-clicada');
      count = 1;
      break;
    case 1:
      arthur.classList.remove('arthur', 'foto-clicada');
      leticia.classList.remove('foto-nao-clicada');
      pedro.classList.remove('foto-nao-clicada');
      rhyan.classList.remove('foto-nao-clicada');
      thales.classList.remove('foto-nao-clicada');
      alvaro.classList.remove('foto-nao-clicada');
      renan.classList.remove('foto-nao-clicada');
      daniel.classList.remove('foto-nao-clicada');
      elizeu.classList.remove('foto-nao-clicada');
      count = 0;
      break;
  }
});

elizeu.addEventListener("click", () => {
  switch (count) {
    case 0:
      elizeu.classList.add('elizeu', 'foto-clicada');
      leticia.classList.add('foto-nao-clicada');
      pedro.classList.add('foto-nao-clicada');
      rhyan.classList.add('foto-nao-clicada');
      thales.classList.add('foto-nao-clicada');
      alvaro.classList.add('foto-nao-clicada');
      renan.classList.add('foto-nao-clicada');
      daniel.classList.add('foto-nao-clicada');
      arthur.classList.add('foto-nao-clicada');
      count = 1;
      break;
    case 1:
      elizeu.classList.remove('elizeu', 'foto-clicada');
      leticia.classList.remove('foto-nao-clicada');
      pedro.classList.remove('foto-nao-clicada');
      rhyan.classList.remove('foto-nao-clicada');
      thales.classList.remove('foto-nao-clicada');
      alvaro.classList.remove('foto-nao-clicada');
      renan.classList.remove('foto-nao-clicada');
      daniel.classList.remove('foto-nao-clicada');
      arthur.classList.remove('foto-nao-clicada');
      count = 0;
      break;
  }
});