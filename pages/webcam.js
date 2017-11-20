import React from 'react'
import Layout from '../components/Layout'
import Main from '../components/Main'
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
      <Layout>
        <Main>
        { !this.state.photo
          ? <Webcam setImage={this.setImage} />
          : <Crop setImage={this.setImage} photo={this.state.photo} />
        }
        </Main>
      </Layout>
    )
  }
}
