import React from 'react'
import Page from '../components/Page'
import Crop from '../components/Crop'
import Webcam from '../components/Webcam'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      photo: false
    }
  }

  setImage = img => this.setState({photo: img})

  render() {
    return (
      <Page>
        { !this.state.photo
          ? <Webcam setImage={this.setImage} />
          : <Crop setImage={this.setImage} photo={this.state.photo} />
        }
      </Page>
    )
  }
}
