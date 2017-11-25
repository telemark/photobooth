import React from 'react'
import ImageButton from './ImageButton'
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

  uploadImage = () => {
    const image = getCroppedImg(this.props.photo, this.state.crop)
    console.log(image)
    this.setState({imageData: image})
  }

  newImage = () => this.props.setImage(false)

  render() {
    return (
      <div>
        <h1>Fornøyd med bildet?</h1>
        <ReactCrop
          src={this.props.photo}
          onChange={this.onChange}
          onImageLoaded={this.onImageLoaded}
          crop={this.state.crop}
          keepSelection={true}
        />
        <div style={{marginTop: '10px'}} className='center'>
          <ImageButton onClick={() => this.rotateImage(-90)} src={'/static/rotate_left.png'} />
          <ImageButton onClick={() => this.rotateImage(90)} src={'/static/rotate_right.png'} />
          <ImageButton onClick={this.newImage} src={'/static/add_photo.png'} />
          <ImageButton onClick={this.saveImage} src={'/static/cloud_download.png'} />
          <ImageButton onClick={this.uploadImage} src={'/static/cloud_upload.png'} />
        </div>
      </div>
    )
  }
}
