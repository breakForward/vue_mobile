window.onload = function () {
  getRem(750, 100)
}

window.onresize = function () {
  getRem(750, 100)
}

function getRem (pWidth, pRem) {
  const html = document.getElementsByTagName('html')[0]
  const oWidth = document.body.clientWidth || document.documentElement.clientWidth
  html.style.fontSize = oWidth / pWidth * pRem + 'px'
}
