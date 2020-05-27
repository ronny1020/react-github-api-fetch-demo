import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../actions/getGitHubAPI'

function Home(props) {
  const { getProduct, repos } = props
  const user = 'ronny1020'
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
