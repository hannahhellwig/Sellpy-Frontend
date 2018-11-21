import React, {Component} from 'react'
import {shirt} from './resources/items'

const columnStyle = {
  flexBasis: '40%',
  minWidth: '300px'
}

const ImageContainer = ({images}) => {
  const imageStyle = {
    width: '100%'
  }
  return <div
    style={columnStyle}
  >
    <img
      src={images[0]}
      alt='Product'
      style={imageStyle}
    />
  </div>
}

const Button = (props) => {
  console.log('button', props.activeClass)
  return <div
  >
    <button className={props.activeClass ? 'active':'button'} onClick={props.toggleButtonClass}>
      {props.title}
    </button>
  </div>
}

const ItemInfo = ({item}, props) => {
  const style = {
    ...columnStyle,
    display: 'flex',
    flexDirection: 'column'
  }
  return <div
    style={style}
  >
    <h2>{item.metadata.brand}</h2>
    <p>{item.metadata.type}</p>
    <p>{item.currentValue}</p>
    <Button title='Lägg i varukorgen'
      activeClass={props.activeClass}
      toggleButtonClass={props.toggleButtonClass}
    />
  </div>
}

const ItemDetailPage = ({item}, props) => {
  console.log('hej', props.active)
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
  return <div>
    <div style={style}>
      <ImageContainer
        images={item.images}
      />
      <ItemInfo
        item={item}
        activeClass={props.activeClass}
        toggleButtonClass={props.toggleButtonClass}
      />
    </div>
  </div>
}

class App extends Component {
  constructor(props) {
        super(props)
        this.state = {
            activeClass: false
        }
        console.log(this.state.activeClass)
    }
    toggleButtonClass = () => {
        const currentState = this.state.active
        this.setState({ active: !currentState })
    }

  render () {
    return <ItemDetailPage
      item={shirt}
      activeClass={this.state.activeClass}
      toggleButtonClass={this.toggleButtonClass}
    />
  }
}

export default App
