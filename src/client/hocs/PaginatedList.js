import React, { Component } from 'react'
import { array, number, func } from 'prop-types'

import List from '../components/List'

class PaginatedList extends Component {
  fetchNext = () => {
    let { skip, limit, count } = this.props
    const next = skip + limit
    if (next < count) {
      this.props.fetch(next)
    }
  }
  fetchPrev = () => {
    let { skip, limit } = this.props
    const prev = skip - limit
    if (prev >= 0) {
      this.props.fetch(prev)
    }
  }
  render() {
    const { response } = this.props
    return(
      <List response={response} next={this.fetchNext} prev={this.fetchPrev}>
        {(props) => this.props.children(props)}
      </List>
    )
  }
}
  
PaginatedList.propTypes = {
  response: array,
  skip: number,
  count: number,
  limit: number,
  fetch: func,
  children: func 
}


export default PaginatedList