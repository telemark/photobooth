import React from 'react'
import session from '../components/session'
import Page from '../components/Page'
import PhotoEdit from '../components/PhotoEdit'
import Webcam from '../components/Webcam'

const WebcamPage = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      photo: false
    }
    this.setImage = this.setImage.bind(this)
  }

  setImage (img) {
    this.setState({photo: img})
  }

  render () {
    return (
      <Page username={this.props.user ? this.props.user.userId : null}>
        { !this.state.photo
          ? <Webcam setImage={this.setImage} />
          : <PhotoEdit setImage={this.setImage} photo={this.state.photo} />
        }
      </Page>
    )
  }
}

export default session(WebcamPage)
