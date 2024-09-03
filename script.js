function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do Guilherme com luz branca")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do Guilherme com sombra")
  }
 
  //pegar a tag img
  // substituir a imagem
  //se tiver light mode, adicionar a image light
  //se tiver sem light mode, manter a imagem normal
}
