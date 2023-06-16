import './App.css';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Movies } from '@/components/movies/Movies';
import { useMovies } from '@/hooks/useMovies';
import { useSearch } from '@/hooks/useSearch';
import { useState } from 'react';

function App() {
  const [sort, setSort] = useState(false);

  const { search, setSearch, errorSearch } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const handleSubmit = event => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="app-container">
      <Header />

      <main>
        <div className="search-form">
          <h2 className="">Buscador de películas</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={search}
              type="text"
              placeholder="Matrix, John Wick..."
            />
            <button type="submit">Buscar</button>
            <label>
              Ordernar por nombre
              <input
                name="sort"
                type="checkbox"
                onChange={handleSort}
                checked={sort}
              />
            </label>
          </form>

          {errorSearch && <p className="search-form__error">{errorSearch}</p>}
        </div>

        {loading && <p>Loading movies...</p>}

        <div className="search-results">
          <Movies movies={movies} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
