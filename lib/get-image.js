module.exports = (image, pixelCrop) => {
  const canvas = document.createElement('canvas')
  canvas.width = '300'
  canvas.height = '450'
  const ctx = canvas.getContext('2d')
  let img = new window.Image()
  img.src = image

  console.log(pixelCrop)
  ctx.drawImage(
    img,
    200,
    0,
    300,
    450,
    0,
    0,
    300,
    450
  )

  const base64Image = canvas.toDataURL('image/jpeg', 0.8)
  return base64Image
}
