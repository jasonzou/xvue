import router from '@/router'
import axios from 'axios'

import apiUrl from './api'

// create an axios instance
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})
console.log("---------- handle.ts ---------")
console.log(apiUrl)
console.log("---------- handle.ts --------- end")

// http request interceptor for axios
axiosInstance.interceptors.request.use(
  // (request) => {
  //   // let token = userStore.token;
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     request.headers.Authorization = `Bearer ${token}`
  //   }
  //   console.log('===============')
  //   console.log(request)
  //   console.log('===============')
  //   return request
  // },
  // (err) => {
  //   return Promise.reject(err)
  // },
)

// http response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // response.headers['Access-Control-Allow-Origin'] = '*'
    console.log("interceptor ==> ", response)
    return response
  },
  (error) => {
    console.log(error)
    if (error.response) {
      console.log('res error1')
      console.log(error.response)
      console.log('res error2')

      const Err_Status = error.response.status
      const Msg = error.response.data
      const ErrData
        = Err_Status == 401
          ? (Msg == '') ? ' Unauthorized access! Please check your user name and passord and log in again.' : Msg
          : ' Unauthorized access! Please check your user name and passord and log in again.'

      console.log(Err_Status)
      switch (Err_Status) {
        case 400:
        case 401:
          // redirect to the login page
          console.log('redirect')
          router.push({ name: 'login' })
          break
      }
    }
    return Promise.reject(error.response.data)
  },
)

export default axiosInstance
