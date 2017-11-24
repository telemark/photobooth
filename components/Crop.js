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
        aspect: 3/4,
        height: 100
      }, image.width / image.height),
    })
  }

  onChange = crop => {
    this.setState({ crop })
  }

  rotateImage = angle => {
    const rotatedImg = rotateImg(this.props.photo, angle)
    this.props.setImage(rotatedImg)
  }

  saveImage = () => {
    const image = getCroppedImg(this.props.photo, this.state.crop)
    this.setState({imageData: image})
  }

  newImage = () => this.props.setImage(false)

  render() {
    return (
      <div>
        <h1>Fornøyd med bildet?</h1>
        <div style={{marginTop: '10px', marginBottom: '10px'}} className='center'>
          <Button onClick={() => this.rotateImage(-90)} value='ROTER VENSTRE' />
          <Button onClick={() => this.rotateImage(90)} value='ROTER HØYRE' />
        </div>
        <ReactCrop
          src={this.props.photo}
          onChange={this.onChange}
          onImageLoaded={this.onImageLoaded}
          crop={this.state.crop}
          keepSelection={true}
        />
        <div style={{marginTop: '10px'}} className='center'>
          <Button onClick={this.newImage} value='NYTT BILDE' />
          <div className={'button'}>
            <a href={this.state.imageData} onClick={this.saveImage} download={'picture.jpg'}>LAGRE BILDE</a>
            <style jsx>
              {`
              a {
                background: #6ac4ae;
                color: white;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
                border-radius: 2px;
                min-width: 90px;
                padding: 0 12px;
                font-size: 14px;
                line-height: 22px;
                font-weight: 500;
                border: 0;
                cursor: pointer;
                height: 36px;
                margin-right: 5px;
                display: block;
              }
            `}
            </style>
          </div>
        </div>
      </div>
    )
  }
}
