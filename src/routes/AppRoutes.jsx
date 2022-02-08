import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Category from '../pages/Category'
import Detail from '../pages/detail/Detail'
import Search from '../pages/search/Search'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  )
}

export default AppRoutes
