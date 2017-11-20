import React from 'react'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Dropzone from 'react-dropzone'
import Crop from '../components/Crop'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  setImage = img => this.setState({photo: img})

  onDrop = file => {
    const reader = new FileReader()
    reader.onload = event => this.setState({ photo: event.target.result, error: false })
    reader.readAsDataURL(file[0])
  }

  render() {
    return (
      <Layout>
        <Main>
          { !this.state.photo
            ? <Dropzone multiple={false} accept='image/*' onDropAccepted={this.onDrop}>
                <p>Dra bilde du ønsker i jpeg- eller png-format over i dette feltet.</p>
              </Dropzone>
            : <Crop setImage={this.setImage} photo={this.state.photo} />
          }
        </Main>
      </Layout>
    )
  }
}
