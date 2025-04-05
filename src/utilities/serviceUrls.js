const serviceUrls = {
  development: {
    todo: 'http://localhost:3003/todos',
    user: 'http://localhost:3003/users',
    signup: 'http://localhost:3003/users'
  },
  production: {
    todo: 'https://localhost:3003/todos',
    user: 'http://localhost:3003/users',
    signup:'https://localhost:3003/users'
  }
}

export default serviceUrls