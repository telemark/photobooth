import Dropzone from 'react-dropzone'
import Box from './Box'

export default ({ onDrop }) => (
  <Dropzone multiple={false} accept='image/*' onDropAccepted={onDrop} className='dropzone'>
    <Box>
      <p>Dra bilde over eller trykk i denne boksen</p>
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
