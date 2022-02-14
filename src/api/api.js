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

    console.log('Movie detail: ', detail)
    console.log('Movie src: ', mediaUrl)
    console.log('Episode: ', episodeId)

    const subtitles = detail.episodeVo.filter(
      (movie) => parseInt(movie.id) === parseInt(episodeId)
    )

    console.log('Subtitle: ', subtitles)

    return { detail, mediaUrl, subtitles }
  },
  searchMovie: (keyword) => {
    return axios.post('/search/v1/searchWithKeyWord', {
      searchKeyWord: keyword,
      size: 50,
      sort: '',
      searchType: '',
    })
  },
  topSearch: () => {
    return axios.get('/search/v1/searchLeaderboard')
  },
  searchSuggestion: (keyword) => {
    return axios.post('/search/searchLenovo', {
      searchKeyWord: keyword,
      size: 10,
    })
  },
}

export default api
