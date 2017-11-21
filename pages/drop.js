import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Dropzone from 'react-dropzone'
import Crop from '../components/Crop'
import Button from '../components/Button'

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
            ? <Dropzone multiple={false} accept='image/*' onDropAccepted={this.onDrop} className={'dropzone'}>
                <p>Dra bilde du ønsker i jpeg- eller png-format over i dette feltet.</p>
                <Button value={'Hent bilde fra datamaskin'} />
              </Dropzone>
            : <Crop setImage={this.setImage} photo={this.state.photo} />
          }
          <Link href={'/webcam'}><a>Ta bilde med webcamera</a></Link>
          <style jsx global>
            {`
            .dropzone {
              width: 90%;
              height: 200px;
              text-align: center;
              border: 2px dashed black;
              border-radius: 25px;
            }
          `}
          </style>
        </Main>
      </Layout>
    )
  }
}
