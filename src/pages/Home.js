import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../actions/getGitHubAPI'

function Home(props) {
  const { getProduct, repos } = props

  const columns = ['id', 'name', 'description', 'size', 'url']

  useEffect(() => {
    getProduct('ronny1020')
  }, [getProduct])

  const thead_th = columns.map((col) => <th scope="col">{col}</th>)
  const tbody_tr = repos.map((row) => (
    <tr>
      {columns.map((col) => (
        <th scope="col">{row[col]}</th>
      ))}
    </tr>
  ))

  return (
    <div className="container">
      <h1 className="m-5">GitHubAPI DEMO</h1>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>{thead_th}</tr>
        </thead>
        <tbody>{tbody_tr}</tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    repos: state.GitHubReposReducer.repos,
  }
}

export default connect(mapStateToProps, { getProduct })(Home)
