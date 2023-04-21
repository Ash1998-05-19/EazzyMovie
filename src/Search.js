import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {query, setQuery, isError}= useGlobalContext();
  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        {/* <div>
          <button type="button" value={query}
              onClick={(e) => setQuery(e.target.value)} >
            Search
          </button>
        </div> */}
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  )
}

export default Search