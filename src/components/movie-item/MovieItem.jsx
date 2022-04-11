import { Link } from 'react-router-dom'
import './movie-item.scss'

import imageResize from '../../api/imageResize'

const MovieItem = ({ movie }) => {
  let category

  if (movie.jumpAddress) {
    category = movie.jumpAddress.slice(-1)[0]
  } else {
    category = movie.domainType
  }

  const link = category === '0' ? `/movie/${movie.id}` : `/tv/${movie.id}`
  let movieCover

  if (movie.imageUrl) {
    movieCover = imageResize(movie.imageUrl, 500)
  } else if (movie.coverVerticalUrl) {
    movieCover = imageResize(movie.coverVerticalUrl)
  } else {
    movieCover = imageResize(movie.cover, 1000)
  }

  return (
    <Link to={link}>
      <div
        className="movie__item"
        style={{
          backgroundImage: `url(${movieCover})`,
        }}
      >
        <div className="movie__item--hover">
          <div className="movie__title">
            {movie.title ? movie.title : movie.name}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieItem
