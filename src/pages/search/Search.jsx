import { useState, useEffect, useRef } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import api from '../../api/api'
import SearchList from '../../components/search-list/SearchList'

import './search.scss'

const Search = () => {
  const [input, setInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchSuggestion, setSearchSuggestion] = useState([])
  const [query] = useSearchParams()
  const keyword = query.get('q')
  const timeoutRef = useRef(null)

  useEffect(() => {
    setSearchSuggestion([])
    const searchMovie = async (keyword) => {
      const response = await api.searchMovie(keyword)
      setSearchResults(response.searchResults)
    }

    searchMovie(keyword)
  }, [keyword])

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    const getSearchSuggestion = async (keyword) => {
      const response = await api.searchSuggestion(keyword)
      setSearchSuggestion(response.searchResults)
    }

    timeoutRef.current = setTimeout(() => {
      getSearchSuggestion(input)
      console.log('Input changed')
    }, [500])
  }, [input])

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${input}`)
  }

  console.log(searchSuggestion)
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tìm kiếm phim, chương trình truyển hình, anime,..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus={true}
        />
      </form>

      {searchSuggestion.length > 0 ? (
        <ul className="search__suggestion">
          {searchSuggestion.map((item, index) => (
            <Link key={index} to={`/search?q=${encodeURIComponent(item)}`}>
              <li>{item.replace(/<em>|<\/em>/g, '')}</li>
            </Link>
          ))}
        </ul>
      ) : null}

      {<SearchList list={searchResults} />}
    </div>
  )
}

export default Search
