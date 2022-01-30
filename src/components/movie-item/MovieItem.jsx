import { Link } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'
import './movie-item.scss'

const MovieItem = ({ movie }) => {
  const category = movie.jumpAddress.slice(-1)[0]

  const link = category === '0' ? `/movie/${movie.id}` : `/tv/${movie.id}`

  return (
    <Link to={link}>
      <div
        className="movie__item"
        style={{ backgroundImage: `url(${movie.imageUrl})` }}
      >
        <div className="movie__item--hover">
          <div className="movie__title">{movie.title}</div>
        </div>
      </div>
    </Link>
  )
}

export default MovieItem
