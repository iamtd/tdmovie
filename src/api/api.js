import axios from './axios'

const api = {
  getHome: (params) => {
    const url = '/homePage/getHome'
    return axios.get(url, { params })
  },
  searchLeaderBoard: () => {
    const url = '/search/v1/searchLeaderboard'
    return axios.get(url)
  },
  getMovieDetail: (params) => {
    const url = '/movieDrama/get'
    return axios.get(url, { params })
  },
  getMovieMedia: (params) => {
    const url = '/media/previewInfo'
    return axios.get(url, { params })
  },
}

export default api
