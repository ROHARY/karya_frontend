import axios from "axios";

const promisifiedAxios = (info, options = {}) => {
  return axios({
    url: info.url,
    method: info.method || "GET",
    data: info.data,
    headers: info.headers,
    responseType: info.dataType,
    onUploadProgress: info.xhr,
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
