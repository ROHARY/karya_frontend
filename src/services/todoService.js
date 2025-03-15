import promisifiedAxios from "../utilities/promisifiedAxios"
import serviceUrls from "../utilities/serviceUrls"
const todoBaseUrl = serviceUrls[process.env.REACT_APP_ENVIRONMENT].todo

const todoService = {

  fetchTodos: (data = {}) =>
    promisifiedAxios({
      url: todoBaseUrl,
      data
    }),

  createTodo: (data) =>
    promisifiedAxios({
      url: todoBaseUrl,
      method: 'POST',
      data
    }),

  updateTodo: (id, data) =>
    promisifiedAxios({
      url: `${todoBaseUrl}/${id}`,
      method: 'PATCH',
      data
    }),

  deleteTodo: (id) =>
    promisifiedAxios({
      url: `${todoBaseUrl}/${id}`,
      method: 'DELETE'
    })

}

export default todoService