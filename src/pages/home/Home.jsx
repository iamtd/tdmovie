import { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import MovieList from '../../components/movie-list/MovieList'
import api from '../../api/api'

import './home.scss'

const Home = () => {
  const [recommendItems, setRecommendItems] = useState([])

  useEffect(() => {
    const getHome = async (page) => {
      const response = await api.getHome(page)
      console.log('Recommend movie: ', response)
      setRecommendItems(
        response.recommendItems.filter((el) => el.homeSectionType !== 'BANNER')
      )
    }
    getHome(1)
  }, [])

  return (
    <>
      <Header />
      <div className="home">
        {recommendItems.map((item) => (
          <MovieList key={item.homeSectionId} item={item} />
        ))}
      </div>
    </>
  )
}

export default Home
