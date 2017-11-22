module.exports = image => {
  let canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  let img = new Image()
  img.src = image
  canvas.width = img.height
  canvas.height = img.width
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.translate(img.width / 2, img.height / 2)
  ctx.rotate(90 * Math.PI / 180)
  ctx.drawImage(img, -img.width / 2, -img.height / 2)
  return canvas.toDataURL('image/jpeg')
}
