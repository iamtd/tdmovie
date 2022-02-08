import axios from './axios'

const api = {
  getHome: (page) => {
    return axios.get('/homePage/getHome', { params: { page } })
  },
  searchLeaderBoard: () => {
    return axios.get('/search/v1/searchLeaderboard')
  },
  getMovie: async (category, id, episode) => {
    const detail = await axios.get('/movieDrama/get', {
      params: { category, id },
    })

    let episodeId
    episode ? (episodeId = episode) : (episodeId = detail.episodeVo[0].id)
    const definition = detail.episodeVo[0].definitionList[0].code

    const media = await axios.get('/media/previewInfo', {
      params: {
        category,
        contentId: id,
        episodeId: episodeId,
        definition,
      },
    })

    const mediaUrl = media.mediaUrl

    console.log('detail: ', detail)
    console.log('media url:', media)

    return { detail, mediaUrl }
  },
  searchMovie: (keyword) => {
    return axios.post('/search/v1/searchWithKeyWord', {
      searchKeyWord: keyword,
      size: 50,
      sort: '',
      searchType: '',
    })
  },
}

export default api
