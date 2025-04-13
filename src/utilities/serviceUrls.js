const serviceUrls = {
  development: {
    todo: 'http://localhost:3003/todos',
    user: 'http://localhost:3003/users',
    signup: 'http://localhost:3003/users',
    signin: 'http://localhost:3003/sing-in'
  },
  production: {
    todo: 'https://localhost:3003/todos',
    user: 'http://localhost:3003/users',
    signup:'https://localhost:3003/users',
    signin: 'http://localhost:3003/sing-in'
  }
}

export default serviceUrls