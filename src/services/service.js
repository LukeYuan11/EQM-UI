import apiClient from 'services/axios'
import { notification } from 'antd'
import { envConfig } from 'services/envConfig'
import { menuData } from './constant'


export async function ClassData (StartDate,EndDate) {
  const apipath = `${envConfig.path}Activity/list`;
  return apiClient
    .get(apipath, {
      params: {
        StartDate,
        EndDate,
      },
    })
    .then(response => {
      console.log(`response:${response}`);
      const { status, data } = response.data
      if (status === '1000') {
        if (data) {
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
      console.log(`Error:${err}`)
      notification.warning({
        message: 'Error',
        description: `Error:${apipath}`,
      })
    })
}

export const getMenuData = () => {
  return menuData
}
