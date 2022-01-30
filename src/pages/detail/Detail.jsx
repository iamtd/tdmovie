import { useState, useEffect } from 'react'
import ReactHlsPlayer from 'react-hls-player/dist'
import { Link, useParams } from 'react-router-dom'
import api from '../../api/api'

import './detail.scss'

const Detail = () => {
  let { category, id } = useParams()
  let categoryId
  categoryId = category === 'movie' ? '0' : '1'

  const [movie, setMovie] = useState({})
  const [video, setVideo] = useState({})
  const [episodeId, setEpisodeId] = useState('')

  useEffect(() => {
    const params = {
      category: categoryId,
      id: id,
    }
    const getMovieDetail = async () => {
      const response = await api.getMovieDetail(params)
      setMovie(response.data)
      setEpisodeId(response.data.episodeVo[0].id)
    }
    getMovieDetail()
  }, [category, id])

  useEffect(() => {
    const params = {
      category: categoryId,
      contentId: id,
      episodeId: episodeId,
      definition: 'GROOT_LD',
    }

    const getMovieMedia = async () => {
      const response = await api.getMovieMedia(params)
      setVideo(response.data.mediaUrl)
    }
    getMovieMedia()
  }, [category, id, episodeId])

  console.log('Detail: ', movie)
  console.log('Media: ', video)
  console.log('Episode: ', episodeId)

  return (
    <div className="detail">
      <ReactHlsPlayer
        className="detail__video"
        src={video}
        autoPlay={false}
        controls={true}
      />
      <h3 className="detail__title">{movie.name}</h3>
      <span className="detail__score">{movie.score} stars</span> ||{' '}
      <span className="detail__year">{movie.year}</span>
      <p className="detail__description">{movie.introduction}</p>
      <div className="episodes">
        <span>Episodes</span>
        {/* <ul>
          {movie.episodeVo.map((e) => (
            <Link to={`/${categoryId}/`}>
              <li></li>
            </Link>
          ))}
        </ul> */}
      </div>
    </div>
  )
}

export default Detail
