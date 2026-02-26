const aboutme = document.getElementById("about-me")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
  // window.getComputedStyle() procura o estilo no css, oq o aboutme.style.display não faz, dessa forma torna possível a ativação inicial do botão com apenas um clique.

  // const isHidden = window.getComputedStyle(aboutme).display === "none"
  // if (isHidden) {
  //   aboutme.style.display = "flex"
  // } else {
  //   aboutme.style.display = "none"
  // }
  // if (aboutme.style.display === "flex") {
  //   btn.innerHTML = "<ion-icon name='chevron-back-outline'></ion-icon>"
  // } else {
  //   btn.innerHTML = "<ion-icon name='chevron-forward-outline'></ion-icon>"
  // }

  // usando o toggle -> funciona como um interruptor, se tiver tira e se não tiver coloca
  aboutme.classList.toggle("hidden")
  if (aboutme.classList.contains("hidden")) {
    btn.innerHTML = "<ion-icon name='chevron-forward-outline'></ion-icon>"
  } else {
    btn.innerHTML = "<ion-icon name='chevron-back-outline'></ion-icon>"
  }
})

const html = document.documentElement
toggleMode = () => {
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // usando o toggle -> funciona como um interruptor, se tiver tira e se não tiver coloca
  html.classList.toggle("light")
}
