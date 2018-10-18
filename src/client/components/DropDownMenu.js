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
    const selected = this.handleSelectionOnMount()
    this.state = {
      Menu: { mounted: false },
      selected: selected
    }
  }
  handleSelectionOnMount = () => {
    const filtered = this.props.items.filter(i => i.path === this.props.history.location.pathname)
    return filtered.length ? filtered[0] : this.props.items[0]
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
  handleSelectionOnClick = (selected) => {
    const { history } = this.props
     this.setState({ Menu: { mounted: false }, selected }, () => {
      history.push(selected.path)
    })
  } 
  renderMenu() {
    const { items } = this.props
    return(
      <Menu>
        {items.map(({ title, Icon, path, _id}) => <Button key={_id} onClick={() => { this.handleSelectionOnClick({ title, path, Icon }) }}><Icon/><Span>{title}</Span></Button>)}
      </Menu>
    )
  }
  renderDropDownMenu() {
    const { Icon, title } = this.state.selected
    return(
      <Container>
        <Button onClick={this.toggleMenu}>
          <Icon />
          <Span>{title}</Span>
          <DropUpIcon/>
          
        </Button>
        {this.renderMenu()}
      </Container>
    )
  }
  renderDropUpMenu() {
    const { Icon, title } = this.state.selected
    return (
      <Container>
        <Button onClick={this.toggleMenu}>
          <Icon />
          <Span>{title}</Span>
          <DropDownIcon />
        </Button>
      </Container>
    )
  }
  render() {
    const { mounted } = this.state.Menu
    return mounted ? this.renderDropDownMenu() : this.renderDropUpMenu()
  }
}

DropDownMenu.propTypes = {
  items: array,
  history: object
}

export default DropDownMenu