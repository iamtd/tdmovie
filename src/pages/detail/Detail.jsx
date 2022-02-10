import React, { useState, useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import api from '../../api/api'

import Player from './Player'

import './detail.scss'

const Detail = () => {
  let { category, id } = useParams()
  let episode, categoryId

  const [query] = useSearchParams()
  episode = query.get('episode')

  categoryId = category === 'movie' ? '0' : '1'

  const [movieDetail, setMovieDetail] = useState({})
  const [mediaUrl, setMediaUrl] = useState({})
  const [subtitles, setSubtitles] = useState([])

  useEffect(() => {
    const getMovie = async (category, id, episode) => {
      const { detail, mediaUrl, subtitles } = await api.getMovie(
        category,
        id,
        episode
      )
      setMovieDetail(detail)
      setMediaUrl(mediaUrl)
      setSubtitles(subtitles[0].subtitlingList)
    }
    getMovie(categoryId, id, episode)
    window.scrollTo(0, 0)
  }, [categoryId, id, episode])

  return (
    <div className="detail">
      {mediaUrl ? (
        <Player mediaUrl={mediaUrl} movie={movieDetail} subtitles={subtitles} />
      ) : (
        'can not load movie'
      )}
      <h3 className="detail__title">{movieDetail.name}</h3>
      <ul className="detail__tags">
        {movieDetail.tagList
          ? movieDetail.tagList.map((e) => <li key={e.id}>{e.name}</li>)
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
      <div className="detail__similar">
        <h2>Similar</h2>

        <ul>
          {typeof movieDetail.likeList !== 'undefined'
            ? movieDetail.likeList.map((movie, i) => (
                <Link key={i} to={`/${movie.category}/${movie.id}`}>
                  <li>
                    <img src={movie.coverVerticalUrl} alt={movie.name} />
                    <p>{movie.name}</p>
                  </li>
                </Link>
              ))
            : null}
        </ul>
      </div>
    </div>
  )
}

export default Detail
