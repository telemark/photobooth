import React from 'react'
import ImageButton from './ImageButton'
import Cropper from 'react-cropper'
import rotateImg from '../lib/rotate-img'
const axios = require('axios')
const { SAVE_URL } = require('../config')

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.rotateImage = this.rotateImage.bind(this)
    this.saveImage = this.saveImage.bind(this)
    this.uploadImage = this.uploadImage.bind(this)
    this.newImage = this.newImage.bind(this)
  }

  rotateImage (angle) {
    const rotatedImg = rotateImg(this.props.photo, angle)
    this.props.setImage(rotatedImg)
  }

  saveImage () {
    const image = this.refs.cropper.getCroppedCanvas().toDataURL()
    this.props.setImage(image)
  }

  async uploadImage () {
    const image = this.refs.cropper.getCroppedCanvas().toDataURL()
    const { data } = await axios.post(SAVE_URL, {name: 'username', content: image})
    this.setState({
      uploadUrl: data.url
    })
  }

  newImage () {
    this.props.setImage(false)
  }

  render () {
    return (
      <div>
        <h1>Fornøyd med bildet?</h1>
        <Cropper
          src={this.props.photo}
          aspectRatio={3 / 4}
          guides={false}
          ref='cropper'
          crop={this.state.saveImage}
        />
        <div style={{margin: '10px'}} className='center'>
          <ImageButton onClick={() => this.rotateImage(-90)} src='/static/rotate_left.png' />
          <ImageButton onClick={() => this.rotateImage(90)} src='/static/rotate_right.png' />
          <ImageButton onClick={this.newImage} src='/static/add_photo.png' />
          <ImageButton onClick={this.saveImage} src='/static/cloud_download.png' />
          <ImageButton onClick={this.uploadImage} src='/static/cloud_upload.png' />
        </div>
        {this.state.uploadUrl ? (<div>Bildet ditt er lastet opp til <a href={this.state.uploadUrl} target={'_blank'}>{this.state.uploadUrl}</a></div>) : null}
      </div>
    )
  }
}
