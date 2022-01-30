import 'normalize.css'
import 'swiper/css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/AppRoutes'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
