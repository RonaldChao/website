import fetch from 'isomorphic-fetch'

const defaultPort = 3000
const port = process.env.PORT || defaultPort

const actionCreator = {
  getCinList: () => {
    console.log('*_*_*_* getCinList *_*_*_*_*')
    return (
      fetch(`http://localhost:${port}/api/cin`)
        .then(response => {
          return response.json()
        })
    )
  },
  getJsonAPI: (_username) => {
    return (
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
    )
  }
}

export default actionCreator
