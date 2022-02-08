import { Swiper, SwiperSlide } from 'swiper/react'
import MovieItem from '../movie-item/MovieItem'

import './search-list.scss'

const SearchList = ({ list }) => {
  return (
    <div className="search__list">
      <h2>Results</h2>
      <Swiper spaceBetween={0} slidesPerView={'auto'}>
        {list.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieItem movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SearchList
