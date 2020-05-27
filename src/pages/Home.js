import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../actions/getGitHubAPI'

function Home(props) {
  const { getProduct, repos } = props

  useEffect(() => {
    getProduct('ronny1020')
  }, [getProduct])

  return (
    <div className="container">
      <h1>Index</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    repos: state.GitHubReposReducer.repos,
  }
}

export default connect(mapStateToProps, { getProduct })(Home)
