import Box from './Box'

export default ({ display }) => (
  display &&
    <a href='/webcam'>
      <Box>
        <p>Ta bilde med webkamera</p>
        <img src='/static/camera.png' height='100px' />
      </Box>
    </a>
)
