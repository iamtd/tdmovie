import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import api from '../../api/api'
import SearchList from '../../components/search-list/SearchList'

import './search.scss'

const Search = () => {
  const [input, setInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [query] = useSearchParams()
  const keyword = query.get('q')

  useEffect(() => {
    const searchMovie = async (keyword) => {
      const response = await api.searchMovie(keyword)
      console.log(response.searchResults)
      setSearchResults(response.searchResults)
    }

    searchMovie(keyword)
  }, [keyword])

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${input}`)
  }

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

      {<SearchList list={searchResults} />}
    </div>
  )
}

export default Search
