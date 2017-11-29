import React from 'react'
import session from '../components/session'
import Page from '../components/Page'
import PhotoEdit from '../components/PhotoEdit'
import { isMobile } from 'react-device-detect'
import DropBox from '../components/DropBox'
import WebcamBox from '../components/WebcamBox'

const Index = class extends React.Component {
  constructor () {
    super()
    this.state = {}
    this.setImage = this.setImage.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }

  setImage (img) {
    this.setState({photo: img})
  }

  onDrop (file) {
    const reader = new window.FileReader()
    reader.onload = event => this.setState({ photo: event.target.result })
    reader.readAsDataURL(file[0])
  }

  render () {
    return (
      <Page username={this.props.user ? this.props.user.userId : null}>
        {!this.state.photo
         ? <div className='box-grid'>
           <WebcamBox display={!isMobile} />
           <DropBox onDrop={this.onDrop} isMobile={isMobile} />
         </div>
          : <PhotoEdit setImage={this.setImage} photo={this.state.photo} />
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
      </Page>
    )
  }
}

export default session(Index)
