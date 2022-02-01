import { Swiper, SwiperSlide } from 'swiper/react'
import MovieItem from '../movie-item/MovieItem'

import './movie-list.scss'

const MovieList = ({ item }) => {
  const movies = item.recommendContentVOList

  return (
    <div className="movie__list">
      <h2>{item.homeSectionName.replace('on Loklok', '')}</h2>

      <Swiper spaceBetween={0} slidesPerView={'auto'}>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieItem movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieList
