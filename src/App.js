import React, {Component} from 'react'
import {shirt} from './resources/items'

const columnStyle = {
  flexBasis: '40%',
  minWidth: '300px'
}

// const Header = ({item}) => {
//   const style = {
//     display: 'flex',
//     flexDirection: 'column',
//     flexWrap: 'wrap',
//     alignItems: 'center',
//     paddingBottom: '40px'
//   }
//   const imageStyle = {
//     width: '100%',
//     paddingBottom: '10px'
//   }
//   return <div style={style}>
//     <img
//       style={imageStyle}
//       src="../sellpy-header.png"
//       alt="header" />
//     {item.traderaCategoryId}
//   </div>
// }

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

const MoreInfo = ({item}, props ) => {
  const style = {
    width: '100%',
    margin: '40px 0 0 0'
  }
  const titleContainerStyle = {
    display: 'flex'
  }
  const titleStyle = {
    backgroundColor: '#fff',
    border: '1px solid pink',
    width: '33.33%',
    padding: '5px',
  }
  const titleStyleActive = {
    backgroundColor: 'pink',
    border: '1px solid pink',
    width: '33.33%',
    padding: '5px',
  }
  const contentStyle = {
    display: 'block',
    border: '1px solid pink',
    padding: '5px',
  }
  const activeStyle = {
    display: 'block'
  }
  return <div
    style={style}
  >
    <div style={titleContainerStyle}>
      <div
        style={titleStyleActive}
        onClick={this.toggleStyle} >
        <h5>Productinformation</h5>
      </div>
      <div
        style={titleStyle}
        onClick={this.toggleStyle} >
        <h5>Frakt & Retur</h5>
      </div>
      <div
        style={titleStyle}
        onClick={this.toggleStyle} >
        <h5>Ge feedback på annons</h5>
      </div>
    </div>
    <div style={props.activeStyle ? activeStyle:contentStyle}>
      <p>Märke: {item.metadata.brand}</p>
      <p>Typ: {item.metadata.type}</p>
      <p>Storlek: {item.metadata.size}</p>
      <p>Modell: {item.metadata.model}</p>
      <p>Färg: {item.metadata.color[0]}</p>
      <p>Sparat vatten: 2500 liter</p>
    </div>
  </div>
}

const Button = ({ activeClass, toggleButtonClass, title }) => {
  console.log('button', activeClass)
  return <div
  >
    <button className={activeClass ? 'active':'button'} onClick={toggleButtonClass}>
      {title}
    </button>
  </div>
}

const ItemInfo = ({ item, activeClass, toggleButtonClass }) => {
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
      activeClass={activeClass}
      toggleButtonClass={toggleButtonClass}
    />
    <MoreInfo
      item={item} />
  </div>
}

const ItemDetailPage = ({ item, activeClass, toggleButtonClass }) => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
  return <div>
    {/* <Header item={item}/>*/}
    <div style={style}>
      <ImageContainer
        images={item.images}
      />
      <ItemInfo
        item={item}
        activeClass={activeClass}
        toggleButtonClass={toggleButtonClass}
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
