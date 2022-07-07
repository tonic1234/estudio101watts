const nav = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        nav.classList.add('headerScroll');
    } else {
        nav.classList.remove('headerScroll');
    }
})

let cont1 = document.getElementById('cont1')
let cont2 = document.getElementById('cont2')
let cont3 = document.getElementById('cont3')
let cant1 = 0,
  cant2 = 0,
  cant3 = 0,
  tiempo = 25

let tiempo1 = setInterval(() => {
  cont1.textContent = cant1 += 1

  if (cant1 === 12) {
    clearInterval(tiempo1)
  }
}, 200);

let tiempo2 = setInterval(() => {
  cont2.textContent = cant2 += 1

  if (cant2 === 220) {
    clearInterval(tiempo2)
  }
}, 10);

let tiempo3 = setInterval(() => {
  cont3.textContent = cant3 += 1

  if (cant3 === 999) {
    clearInterval(tiempo3)
  }
}, 5);