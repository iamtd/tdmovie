import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ga-mobile-api.loklok.tv/cms/app',
  headers: {
    'Content-Type': 'application/json',
    lang: 'en',
    versioncode: '11',
    clienttype: 'ios_jike_default',
  },
  params: (params) => params,
})

instance.interceptors.request.use(async (config) => config)

instance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }

    return response
  },
  (error) => {
    throw error
  }
)

export default instance
