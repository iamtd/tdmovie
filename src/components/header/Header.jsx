import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './header.scss'

const Header = () => {
  const category = [
    { display: 'Trang chủ', path: '/' },
    { display: 'Phim T.hình', path: '/tv' },
    { display: 'Phim', path: '/movie' },
    { display: 'Anime', path: '/anime' },
    { display: 'Danh sách của tui', path: '/bookmark' },
  ]

  const { pathname } = useLocation()
  const active = category.findIndex((el) => el.path === pathname)

  return (
    <div className="header">
      <div className="nav__left">
        <div className="header__logo">
          <Link to="/">
            <p>td</p>
            <span>.</span>
          </Link>
        </div>

        {/* <ul className="nav__list">
          {category.map((el, i) => (
            <li key={i} className={`nav__item ${i === active ? 'active' : ''}`}>
              <Link to={el.path} className="nav__link">
                {el.display}
              </Link>
            </li>
          ))}
        </ul> */}
      </div>

      <div className="nav__right">
        <div className="search">
          <Icon icon="bx:bx-search" style={{ fontSize: '24px' }} />
        </div>
        <div className="nav__settings"></div>
      </div>
    </div>
  )
}

export default Header
