import { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import MovieList from '../../components/movie-list/MovieList'
import api from '../../api/api'

import './home.scss'

const Home = () => {
  const [recommendItems, setRecommendItems] = useState([])

  useEffect(() => {
    const getRecommandItems = async () => {
      const params = { page: 0 }
      const response = await api.getHome(params)
      setRecommendItems(
        response.data.recommendItems.slice(
          2,
          response.data.recommendItems.length - 1
        )
      )
    }
    getRecommandItems()
  }, [])

  console.log(recommendItems)

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
