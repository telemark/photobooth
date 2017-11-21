import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Dropzone from 'react-dropzone'
import Crop from '../components/Crop'
import { isMobile } from 'react-device-detect'
import DropBox from '../components/DropBox'
import WebcamBox from '../components/WebcamBox'

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
            ? <div className='box-grid'>
                <WebcamBox display={!isMobile} />
                <DropBox onDrop={this.onDrop} />
              </div>
            : <Crop setImage={this.setImage} photo={this.state.photo} />
          }
          <style jsx>
            {`
              .box-grid {
                display: grid;
                grid-template-columns: auto auto;
                grid-column-gap: 15px;
                grid-row-gap: 15px;
                justify-content: center;
              }
              @media screen and (max-width: 800px) {
                .box-grid {
                  grid-template-columns: unset
                }
              }
            `}
          </style>
        </Main>
      </Layout>
    )
  }
}
