module.exports = (image, pixelCrop) => {
  const canvas = document.createElement('canvas')
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height
  const ctx = canvas.getContext('2d')
  let img = new window.Image()
  img.src = image

  ctx.drawImage(
    img,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  )

  const base64Image = canvas.toDataURL('image/jpeg')
  return base64Image
}
