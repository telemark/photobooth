import Dropzone from 'react-dropzone'
import Box from './Box'

export default ({ onDrop, text }) => (
  <Dropzone multiple={false} accept='image/*' onDropAccepted={onDrop} className='dropzone'>
    <Box>
      <p>{text}</p>
      <img src='/static/upload-photo.png' height='100px' />
    </Box>
    <style jsx>
      {`
        .dropzone {
          border: 0;
        }
      `}
    </style>
  </Dropzone>
)
