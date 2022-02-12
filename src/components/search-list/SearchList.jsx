import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import MovieItem from '../movie-item/MovieItem'

import api from '../../api/api'

import './search-list.scss'

const SearchList = ({ list }) => {
  const [searchLeaderboard, setsearchLeaderboard] = useState([])

  useEffect(() => {
    const topSearch = async () => {
      const response = await api.topSearch()
      setsearchLeaderboard(response.list)
    }
    topSearch()
  }, [])

  // console.log(searchLeaderboard)

  return (
    <div className="search__list">
      {list.length > 0 ? (
        <>
          <h2>Results </h2>
          <Swiper spaceBetween={0} slidesPerView={'auto'}>
            {list.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieItem movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <>
          <h2>Top Searches </h2>
          <Swiper spaceBetween={0} slidesPerView={'auto'}>
            {searchLeaderboard.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieItem movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  )
}

export default SearchList
