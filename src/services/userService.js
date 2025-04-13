import promisifiedAxios from "../utilities/promisifiedAxios"
import serviceUrls from "../utilities/serviceUrls"
const signupUrl = serviceUrls[process.env.REACT_APP_ENVIRONMENT].signup
const signInUrl = serviceUrls[process.env.REACT_APP_ENVIRONMENT].signin
const userBaseUrl = serviceUrls[process.env.REACT_APP_ENVIRONMENT].user

const userService = {
  signUp: (data) =>
    promisifiedAxios({
      url: signupUrl,
      method: 'POST',
      data
    }),
  signIn: (data) =>
    promisifiedAxios({
      url: signInUrl,
      method: 'POST',
      data
    }),
}

export default userService