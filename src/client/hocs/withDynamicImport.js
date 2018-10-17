import React from 'react'

const withDynamicImport = (load, { Loading }) => {
  class DynamicImportContainer extends React.Component {
    Success = null 
    state = {
      loading: true
    }
    componentDidMount() {
      load()
      .then((module) => {
        this.Success = module.default
        this.setState({ loading: false })
      })
    }
    render() {
      const { loading } = this.state 
      if (loading) {
        return <Loading /> 
      } else {
        return <this.Success {...this.props} />
      }
    }
  }

  return DynamicImportContainer 
}

export default withDynamicImport 