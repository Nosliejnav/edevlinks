function toggleMode() {
  const html = document.documentElement

  //if(html.classList.contains('Light')){
  //  html.classList.remove('light')
  //}else {
  //  html.classList.add('light')
  //}

  html.classList.toggle("light")

  //PEGAR A TAG IMG
  const img = document.querySelector("#profile img")

  //SUBSTITUIR A IMAGEM
  if (html.classList.contains("light")) {
    //SE TIVER LIGHT MODE, ADICIONAR A IMAGEM LIGHT
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //SE TIVER SEM LIGJHT MODE, MANTER A IMGEM NORMAL
    img.setAttribute("src", "./assets/avatar.png")
  }
}
