import axios from "axios";

const promisifiedAxios = (info, options = {}) => {
  document.cookie = "userToken=abcd1234; path=/; SameSite=None; Secure;";
  console.log('heheheeh')
  return axios({
    url: info.url,
    method: info.method || "GET",
    data: info.data,
    headers: {...info.headers, ...{'Authorization': `Bearer ${'myToken'}`}},
    responseType: info.dataType,
    onUploadProgress: info.xhr,
    withCredentials: true,
  })
  .then((response) => {
    if (info.success) info.success(response.data)
    return response.data;
  })
  .catch((error) => {
    if (info.error) info.error(error)
    return Promise.reject(error);
  })
  .finally(() => {
    if (info.complete) info.complete()
  })
};

export default promisifiedAxios;
