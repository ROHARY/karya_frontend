import promisifiedAxios from "../utilities/promisifiedAxios"
import serviceUrls from "../utilities/serviceUrls"
const signupUrl = serviceUrls[process.env.REACT_APP_ENVIRONMENT].signup
const userBaseUrl = serviceUrls[process.env.REACT_APP_ENVIRONMENT].user

const userService = {
  signUp: (data) =>
    promisifiedAxios({
      url: signupUrl,
      method: 'POST',
      data
    }),
}

export default userService