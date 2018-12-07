import React, {Component} from 'react'
import {shirt} from './resources/items'
import {categories} from './resources/TraderaCategories'

const columnStyle = {
  flexBasis: '40%',
  minWidth: '300px'
}

const Header = ({ item, categories }) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingBottom: '40px'
  }
  const imageStyle = {
    width: '100%',
    paddingBottom: '10px'
  }

  const breadcrumbStyle = {
    marginLeft: '10px',
    fontSize: '14px',
    color: '#adadad'
  }

  return <div style={style}>
    <img
      style={imageStyle}
      src="../sellpy-header.png"
      alt="header" />
    <div style={breadcrumbStyle}>
      {categories[item.traderaCategoryId]}
    </div>
  </div>
}

const ImageContainer = ({images}) => {
  const imageStyle = {
    width: '100%',
    margin: '0 0 20px'
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

class AccordionItem extends Component {
  constructor(props) {
        super(props)
        this.state = {
            activeAccordionClass: false
        }
    }
    toggleAccordionClass = () => {
        const currentState = this.state.activeAccordionClass
        this.setState({ activeAccordionClass: !currentState })
    }

  render () {
    return (
      <div className='accordionItem'>
        <div
          className={this.state.activeAccordionClass ? 'activeAccordionTitle':'accordionTitle'}
          onClick={this.toggleAccordionClass} >
          <h4>{this.props.title}</h4>
        </div>
        <div className={this.state.activeAccordionClass ? 'activeAccordionContent':'accordionContent'}>
          <div className='contentCollumn'>
            <p>Märke:</p>
            <p>Typ:</p>
            <p>Storlek:</p>
            <p>Modell:</p>
            <p>Färg:</p>
            <a href='https://sustainability.sellpy.se/100miljonerliter/'>	💧 Sparat vatten:</a>
          </div>
          <div className='contentCollumn'>
            <p>{this.props.item.metadata.brand}</p>
            <p>{this.props.item.metadata.type}</p>
            <p>{this.props.item.metadata.size}</p>
            <p>{this.props.item.metadata.model}</p>
            <p>{this.props.item.metadata.color[0]}</p>
            <p>2500 liter</p>
          </div>
        </div>
      </div>
  )}
}

class Accordion extends Component {

  render () {
    return <div className='accordion'>
    <AccordionItem
      item={this.props.item}
      title='Productinformation' />
    <AccordionItem
      item={this.props.item}
      title='Frakt & Retur' />
    <AccordionItem
      item={this.props.item}
      title='Ge feedback på annons' />
      </div>
  }
}


class Button extends Component {
  constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }
  toggleButton = () => {
      const currentState = this.state.active
      this.setState({ active: !currentState })
  }
  render () {
    return <div className='buttonContainer'>
      <button
        className={this.state.active ? this.props.activeButtonClass : this.props.buttonClass}
        onClick={this.toggleButton}>
        {this.state.active ? this.props.activeTitle : this.props.title}
      </button>
    </div>
  }
}

const ItemInfo = ({ item }) => {
  const style = {
    ...columnStyle,
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    boxSizing: 'border-box',
  }
  const buttonContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
  }

  const linkStyle = {
    fontSize: '12px',
    margin: '5px 15px 5px 0',
  }
  return <div
    style={style}
  >
    <h1>{item.metadata.brand}</h1>
    <h2>{item.currentValue} kr</h2>
    <div style={buttonContainerStyle}>
      <Button
        title='Lägg i varukorgen'
        activeTitle='Ta bort'
        buttonClass={'button'}
        activeButtonClass={'active'}
      />
      <Button
        title='Favorit &#x2661;'
        activeTitle='Favorit &#x2665;'
        buttonClass={'buttonFavorite'}
        activeButtonClass={'buttonFavorite'}
      />
    </div>
    <Accordion
      item={item} />
    <div style={buttonContainerStyle}>
      <a style={linkStyle} href='https://www.sellpy.se/store/brand/Polo%20Ralph%20Lauren'>
        {item.metadata.brand} &#x226B;
      </a>
      <a style={linkStyle} href='https://www.sellpy.se/store/type/Skjorta'>
        {item.metadata.type} &#x226B;
      </a>
      <a style={linkStyle} href='https://www.sellpy.se/search?refinementList%5Buser%5D=Kw4PPAotLa'>
        Samma Säljare &#x226B;
      </a>
    </div>
  </div>
}

const ItemDetailPage = ({ item, categories }) => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
  return <div>
    <Header
      item={item}
      categories={categories} />
    <div style={style}>
      <ImageContainer
        images={item.images} />
      <ItemInfo
        item={item} />
    </div>
  </div>
}

class App extends Component {

  render () {
    return <ItemDetailPage
      item={shirt}
      categories={categories}
    />
  }
}

export default App
