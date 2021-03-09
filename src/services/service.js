import apiClient from 'services/axios'
import { notification } from 'antd'
import { envConfig } from 'services/envConfig'
import { menuData } from './constant'

export async function ClassData() {
  return apiClient
    .get(`${envConfig.path}Activity/list`, {
      params: {
        StartDate: addDays(Date.now(), -30).toLocaleDateString(),
        EndDate: addDays(Date.now(), 30).toLocaleDateString(),
      },
    })
    .then(response => {
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
      notification.warning({
        message: 'err',
        description: err,
      })
    })
}

function addDays (date, days) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export const getMenuData = () => {
  return menuData
}
