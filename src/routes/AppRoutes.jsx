import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Category from '../pages/Category'
import Detail from '../pages/detail/Detail'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/:category/:id" element={<Detail />} />
    </Routes>
  )
}

export default AppRoutes
