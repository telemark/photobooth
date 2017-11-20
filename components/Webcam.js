import React from 'react'
import Webcam from 'react-webcam'
import Button from '../components/Button'

export default class extends React.Component {
  setRef = webcam => this.webcam = webcam

  capture = () => {
    const imageSrc = this.webcam.getScreenshot()
    this.props.setImage(imageSrc)
  }

  render() {
    return (
      <div>
        <div>
          <h1>Ta bilde</h1>
          <p style={{color: '#999', fontSize: '13px'}}>
            Ta bilde til skolekort
          </p>
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
