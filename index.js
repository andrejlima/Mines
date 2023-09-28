let pontos = 0;
let ln = 5;
let cl = 5;
document.getElementById('pt').innerText = `Pontos ${pontos}`

for (let i = 1; i <= ln; i++) {
  document.querySelector("#container").innerHTML += `<div class="mines" id="l${i}">
    </div>`
}

for (let i = 1; i <= cl; i++) {
  document.querySelector("#l1").innerHTML += `<div id="camp-${i}" onclick="color${i}()"></div>`
}
for (let i = 6; i <= 10; i++) {
  document.querySelector("#l2").innerHTML += `<div id="camp-${i}" onclick="color${i}()"></div>`
}
for (let i = 11; i <= 15; i++) {
  document.querySelector("#l3").innerHTML += `<div id="camp-${i}" onclick="color${i}()"></div>`
}
for (let i = 16; i <= 20; i++) {
  document.querySelector("#l4").innerHTML += `<div id="camp-${i}" onclick="color${i}()"></div>`
}
for (let i = 21; i <= 25; i++) {
  document.querySelector("#l5").innerHTML += `<div id="camp-${i}" onclick="color${i}()"></div>`
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Example: Generate a random number between 1 and 10
let r = getRandomInt(1, 26);

for (let i = 1; i <= 25; i++) {
  // Define a function with a dynamic name
  window[`color${i}`] = function () {
    if (i === r) {
      document.getElementById(`camp-${r}`).style.backgroundImage = "url(https://stake.com/_app/immutable/assets/mine.b710630c.svg)";
      document.getElementById(`camp-${r}`).style.backgroundSize = "cover";
      document.getElementById(`camp-${r}`).style.backgroundPosition = "center";
      document.getElementById('explosion').play();
      setTimeout(lose, 100);
    }
    if (i != r) {
      document.getElementById(`camp-${i}`).style.backgroundImage = "url(https://stake.com/_app/immutable/assets/gem-none.8156426e.svg)";
      document.getElementById(`camp-${i}`).style.backgroundSize = "cover";
      document.getElementById(`camp-${i}`).style.backgroundPosition = "center";
      pontos = pontos + 1;
      document.getElementById('pt').innerText = `Pontos ${pontos}`
      document.getElementById('success').play();
    }
  };
}

for (let i = 1; i <= 25; i++) {
  const element = document.getElementById(`camp-${i}`);
  element.style.width = 'var(--px)';
  element.style.height = 'var(--px)';
  element.style.border = 'solid black';
}

function lose() {
  alert(`Perdeu! Portuação: ${pontos}`)
}