import React from 'react'
import Button from './Button'
import ReactCrop, { makeAspectCrop } from 'react-image-crop'
import getCroppedImg from '../lib/get-cropped-img'
import rotateImg from '../lib/rotate-img'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  onImageLoaded = image => {
    this.setState({
      crop: makeAspectCrop({
        x: 25,
        y: 0,
        aspect: 3 / 5,
        width: 50,
      }, image.width / image.height),
    })
  }

  onChange = crop => this.setState({ crop })

  rotateImage = angle => {
    const rotatedImg = rotateImg(this.props.photo, angle)
    this.props.setImage(rotatedImg)
  }

  saveImage = () => {
    const image = getCroppedImg(this.props.photo, this.state.crop)
    console.log(image)
  }

  newImage = () => this.props.setImage(false)

  render() {
    return (
      <div>
        <h1>Fornøyd med bildet?</h1>
        <div style={{marginTop: '10px', marginBottom: '10px'}} className='center'>
          <Button onClick={() => this.rotateImage(90)} value='ROTER VENSTRE' />
          <Button onClick={() => this.rotateImage(-90)} value='ROTER HØYRE' />
        </div>
        <ReactCrop
          src={this.props.photo}
          minWidth={20}
          minHeight={20}
          onChange={this.onChange}
          onImageLoaded={this.onImageLoaded}
          crop={this.state.crop}
          keepSelection={true}
        />
        <div style={{marginTop: '10px'}} className='center'>
          <Button onClick={this.newImage} value='NYTT BILDE' />
          <Button onClick={this.saveImage} value='LAGRE BILDE' />
        </div>
      </div>
    )
  }
}
