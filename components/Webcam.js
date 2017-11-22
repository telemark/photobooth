import React from 'react'
import Webcam from 'react-webcam'
import Button from '../components/Button'

export default class extends React.Component {
  setRef = webcam => this.webcam = webcam

  capture = () => this.props.setImage(this.webcam.getScreenshot())

  handleKeyDown = event => event.key == 'Enter' && this.capture()

  componentDidMount = () => window.addEventListener('keydown', this.handleKeyDown)

  render() {
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
          <Button onClick={this.capture} value='TA BILDE' />
        </div>
      </div>
    )
  }
}
