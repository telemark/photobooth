import React from 'react'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Crop from '../components/Crop'
import Webcam from '../components/Webcam'
import Header from '../components/Header'

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
        <Header/>
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
