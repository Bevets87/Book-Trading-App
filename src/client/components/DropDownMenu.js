import React, { Component } from 'react'
import { array, object } from 'prop-types'

import {
  Container,
  Button,
  Menu,
  DropDownIcon,
  DropUpIcon,
  Span
} from '../styles/components/DropDownMenu'

class DropDownMenu extends Component {
  constructor(props) {
    super(props)
    const item = props.items.length ? props.items.filter(i => i.path === props.history.location.pathname)[0] : null
    this.state = {
      Menu: { mounted: false },
      selected: item 
    }
  }
  componentWillUnmount() {
    this.unmountMenu()
  }
  toggleMenu = () => {
    this.setState({ Menu: { mounted: !this.state.Menu.mounted } })
  }
  unmountMenu = () => {
    this.setState({ Menu: { mounted: false } })
  }
  handleSelection = ({ title, path }) => {
    const { history } = this.props
    const item = this.props.items.filter(item => item.title === title)[0] 
    this.setState({ Menu: { mounted: false }, selected: item }, () => {
      history.push(path)
    })
  } 
  renderMenu() {
    const { items } = this.props
    return(
      <Menu>
        {items.map(({ title, Icon, path, _id}) => <Button key={_id} onClick={() => { this.handleSelection({ title, path }) }}><Icon/>{title}</Button>)}
      </Menu>
    )
  }
  renderDropDownButton() {
    const { Icon, title } = this.state.selected
    return(
      <Button onClick={this.toggleMenu}>
        <Span><Icon/>{title}</Span>
        <DropDownIcon/>
      
      </Button>
    )
  }
  renderDropUpButton() {
    const { Icon, title } = this.state.selected
    return (
      <Button onClick={this.toggleMenu}>
        <Span><Icon />{title}</Span>
        <DropUpIcon />
      </Button>
    )
  }
  render() {
    const { mounted } = this.state.Menu
    return(
      <Container>
        {mounted ? this.renderDropUpButton() : this.renderDropDownButton()}
        {mounted ? this.renderMenu() : null}
      </Container>
    )
  }
}

DropDownMenu.propTypes = {
  items: array,
  history: object
}

export default DropDownMenu