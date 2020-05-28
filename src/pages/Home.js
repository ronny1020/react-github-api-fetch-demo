import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../actions/getGitHubAPI'

function Home(props) {
  const { getProduct, repos } = props

  const [user, setUser] = React.useState('ronny1020')
  const [numOfRows, setNumOfRows] = React.useState(1)

  const columns = ['id', 'name', 'description', 'size', 'url']

  useEffect(() => {
    getProduct(user)
  }, [getProduct, user])

  useEffect(() => {
    if (
      document.documentElement.scrollHeight === window.innerHeight &&
      window.scrollY === 0 &&
      numOfRows < repos.length
    ) {
      setNumOfRows(numOfRows + 1)
    }
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight ===
          document.documentElement.scrollHeight &&
        numOfRows < repos.length
      ) {
        setNumOfRows(numOfRows + 1)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [numOfRows, repos.length])

  let result = (
    <div className="alert alert-warning">
      <strong>Warning!</strong> <span>Can't find data</span>
    </div>
  )
  if (repos.length) {
    const thead_th = columns.map((col, i) => (
      <th key={i} scope="col">
        {col}
      </th>
    ))
    const tbody_tr = repos.map((row, i) => {
      if (i < numOfRows) {
        return (
          <tr key={i}>
            {columns.map((col, i) => (
              <th key={i} scope="col">
                {row[col]}
              </th>
            ))}
          </tr>
        )
      }
      return null
    })

    result = (
      <table className="table table-striped my-5">
        <thead className="thead-dark">
          <tr>{thead_th}</tr>
        </thead>
        <tbody>{tbody_tr}</tbody>
      </table>
    )
  }

  return (
    <div className="container">
      <h1 className="my-5">GitHubAPI DEMO</h1>

      <div className="my-5">
        <label htmlFor="userId">Write the GitHub ID to search here:</label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="ID"
            id="userId"
            name="userId"
            defaultValue={user}
          />
          <div className="input-group-append">
            <button
              className="btn btn-success"
              onClick={() => {
                setUser(document.getElementById('userId').value)
              }}
            >
              Search ID
            </button>
          </div>
        </div>
      </div>
      {result}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    repos: state.GitHubReposReducer.repos,
  }
}

export default connect(mapStateToProps, { getProduct })(Home)
