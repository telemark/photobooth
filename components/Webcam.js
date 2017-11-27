import React from 'react'
import Webcam from 'react-webcam'
import ImageButton from '../components/ImageButton'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.setRef = this.setRef.bind(this)
    this.capture = this.capture.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  setRef (webcam) {
    this.webcam = webcam
  }

  capture () {
    this.props.setImage(this.webcam.getScreenshot())
  }

  handleKeyDown (event) {
    event.key === 'Enter' && this.capture()
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  render () {
    return (
      <div>
        <div>
          <h1>Ta bilde</h1>
        </div>
        <div>
          <Webcam
            audio={false}
            screenshotFormat='image/png'
            ref={this.setRef}
          />
        </div>
        <div className='center'>
          <ImageButton onClick={this.capture} src={'/static/camera_alt.png'} />
        </div>
      </div>
    )
  }
}
