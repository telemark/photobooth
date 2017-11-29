module.exports = (image, angle) => {
  let canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  let img = new window.Image()
  img.src = image
  if (angle === 90) {
    canvas.setAttribute('width', img.height)
    canvas.setAttribute('height', img.width)
    ctx.rotate(angle * Math.PI / 180)
    ctx.drawImage(img, 0, -img.height)
  } else {
    canvas.setAttribute('width', img.height)
    canvas.setAttribute('height', img.width)
    ctx.rotate(angle * Math.PI / 180)
    ctx.drawImage(img, -img.width, 0)
  }
  return canvas.toDataURL('image/jpeg')
}
