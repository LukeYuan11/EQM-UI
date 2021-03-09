import { notification } from 'antd'

// export async function login(email, password) { 
//     return donothing(email, password)
//     .catch(error => {
//       notification.warning({
//         message: error.code,
//         description: error.message,
//       })
//     })
//  } // sign in procedure
// async function donothing(email, password){
//     await setTimeout(() => {
//         console.log('donothing');
//     }, 100);
//     if(email === 'aaa@tutorabc.com' && password === 'aaa') {
//       return true;
//     }
//     return false;
//   }

// export async function register(email, password, name) { 
//     if(email !== '' && password !== '' && name !== '') {
//         return true;
//     }
//     return false;

//  } // sign up procedure
 
// export async function currentAccount() { 
//     return {
//         "kind": "identitytoolkit#GetAccountInfoResponse",
//         "users": [
//           {
//             "localId": "DIooXdBrPObDx7dNBbgDoi7uUFi2",
//             "email": "admin@mediatec.org",
//             "passwordHash": "UkVEQUNURUQ=",
//             "emailVerified": false,
//             "passwordUpdatedAt": 1545120444000,
//             "providerUserInfo": [
//               {
//                 "providerId": "password",
//                 "federatedId": "admin@mediatec.org",
//                 "email": "admin@mediatec.org",
//                 "rawId": "admin@mediatec.org"
//               }
//             ],
//             "validSince": "1545120444",
//             "disabled": false,
//             "lastLoginAt": "1612022096265",
//             "createdAt": "1545120444000",
//             "lastRefreshAt": "2021-01-30T15:54:56.265Z"
//           }
//         ]
//       }
      
//  } // get current authorized user data
// export async function logout() { 
//     return {
//         "kind": "identitytoolkit#GetAccountInfoResponse",
//         "users": [
//           {
//             "localId": "",
//             "email": "",
//             "passwordHash": "",
//             "emailVerified": false,
//             "passwordUpdatedAt": 1545120444000,
//             "providerUserInfo": [
//               {
//                 "providerId": "",
//                 "federatedId": "",
//                 "email": "",
//                 "rawId": ""
//               }
//             ],
//             "validSince": "1545120444",
//             "disabled": false,
//             "lastLoginAt": "1612022096265",
//             "createdAt": "1545120444000",
//             "lastRefreshAt": "2021-01-30T15:54:56.265Z"
//           }
//         ]
//       }

//  } // logout user

import apiClient from 'services/axios'
import store from 'store'
import {envConfig} from 'services/envConfig'


export async function login(email, password) {
  return apiClient
    .post(`${envConfig.path}User/login`, {
      "account": email,
      "password": password
    })
    .then(response => {
      console.log(response.data)
      const { status,data } = response.data
      if (status === "1000") {
        if (data)
        {
          store.set('accessToken', data)
          return response.data
        } 
        return false
      }
      notification.warning({
        message: response.data.error.errorCode,
        description: response.data.error.errorMessage,
      })
      return false
    })
    .catch(err => {
      notification.warning({
        message: "err",
        description: err,
      })
    })
}

export async function register(email, password, name) {
  return apiClient
    .post('/auth/register', {
      email,
      password,
      name,
    })
    .then(response => {
      // console.log(response.data)
      const { status,data } = response.data
      if (status === "1000") {
        if (data)
        {
          store.set('accessToken', data)
          return response.data
        } 
        return false
      }
      notification.warning({
        message: response.data.error.errorCode,
        description: response.data.error.errorMessage,
      })
      return false
    })
    .catch(err => console.log(err))
}

export async function currentAccount() {
  return apiClient
    .get(`${envConfig.path}User/profile`, {})
    .then(response => {
      if (response) {
        const { data } = response
        return data
      }
      return false
    })
    .catch(err => console.log(err))
}
// export async function currentAccount() {
//   return apiClient
//     .get('/auth/account')
//     .then(response => {
//       if (response) {
//         const { accessToken } = response.data
//         if (accessToken) {
//           store.set('accessToken', accessToken)
//         }
//         return response.data
//       }
//       return false
//     })
//     .catch(err => console.log(err))
// }
export async function logout() {
  return apiClient
    .get('/auth/logout')
    .then(() => {
      store.remove('accessToken')
      return true
    })
    .catch(err => console.log(err))
}
