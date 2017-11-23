import Dropzone from 'react-dropzone'
import Box from './Box'

export default ({ onDrop, isMobile }) => (
  <Dropzone multiple={false} accept='image/*' onDropAccepted={onDrop} className='dropzone'>
    <Box>
      <p>{isMobile ? 'Trykk på boksen for å hente bildet' : 'Dra og slipp bildet over denne boksen'}</p>
      <img src={isMobile ? '/static/camera.png' : '/static/upload-photo.png'} height='100px' />
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
