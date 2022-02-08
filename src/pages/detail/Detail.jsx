import React, { useState, useEffect, useRef } from 'react'
import ReactHlsPlayer from 'react-hls-player/dist'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import api from '../../api/api'

import './detail.scss'

const Detail = () => {
  let { category, id } = useParams()
  let episode, categoryId

  const [query] = useSearchParams()
  episode = query.get('episode')

  categoryId = category === 'movie' ? '0' : '1'

  console.log(episode)

  const [movieDetail, setMovieDetail] = useState({})
  const [mediaUrl, setMediaUrl] = useState({})

  useEffect(() => {
    const getMovie = async (category, id, episode) => {
      const { detail, mediaUrl } = await api.getMovie(category, id, episode)
      setMovieDetail(detail)
      setMediaUrl(mediaUrl)
    }
    getMovie(categoryId, id, episode)
  }, [categoryId, id, episode])

  const CustomHls = () => {
    const playerRef = useRef()
    return (
      <ReactHlsPlayer
        playerRef={playerRef}
        hlsConfig={{
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          lowLatencyMode: true,
          enableWorker: true,
        }}
        className="detail__video"
        src={mediaUrl}
        autoPlay={false}
        controls={true}
      ></ReactHlsPlayer>
    )
  }

  return (
    <div className="detail">
      <CustomHls />
      <h3 className="detail__title">{movieDetail.name}</h3>
      <ul className="detail__tags">
        {movieDetail.tagList
          ? movieDetail.tagList.map((e) => <li>{e.name}</li>)
          : 'can not load tags'}
      </ul>
      <span className="detail__score">{movieDetail.score} stars</span> |{' '}
      <span className="detail__year">{movieDetail.year}</span>
      <p className="detail__description">{movieDetail.introduction}</p>
      <ul className="detail__episodes">
        {typeof movieDetail.episodeVo !== 'undefined'
          ? movieDetail.episodeVo.map((el, i) => (
              <Link key={i} to={`/${category}/${id}?episode=${el.id}`}>
                <li>{++i}</li>
              </Link>
            ))
          : 'Error'}
      </ul>
    </div>
  )
}

export default Detail
