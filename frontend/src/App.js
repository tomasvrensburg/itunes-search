import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import starFill from './images/star-fill.svg';
import starUnfill from './images/star-nofill.svg';

function App() {

  // State variables
  const [term, setTerm] = useState('');
  const [media, Media] = useState('all');
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/search?term=${term}&media=${media}`);
      console.log('Search results:', response.data);
      // Store results in state variable
      setSearchResults(response.data);
      setFavorites([]);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  // Function to format date into readable format
  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return formattedDate;
  }

  // Function to toggle favorite
  const toggleFavorite = (index) => {
    const updatedFavorites = [...favorites];
    const isFavorite = updatedFavorites.includes(index);
    if (isFavorite) {
      updatedFavorites.splice(updatedFavorites.indexOf(index), 1);
    } else {
      updatedFavorites.push(index);
    }
    setFavorites(updatedFavorites);
    console.log(favorites);
  };

  return (
    <div className="App">
      <section id="banner">
        <h1>Search over 100 million songs.</h1>
        <p>Use the search below to search Apple's collection of music, TV shows, movies, podcasts, and audiobooks. You can even create your own favourites list from the results.</p>

        <form onSubmit={handleSubmit}>
          {/* Search bar for 'term' */}
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />

          {/* Submit search button */}
          <button id="submitSearch">
            Search iTunes
            <GoChevronRight className='reactIcon-right' />
          </button>

          {/* Radio options for 'media' */}
          <fieldset>
            <legend>Content</legend>
            <div className="radio">
              <label htmlFor="music">Music</label>
              <input
                type="radio"
                id="music"
                name="media"
                value="music"
                checked={media === 'music'}
                onChange={() => Media('music')}
              />
            </div>
            <div className="radio">
              <label htmlFor="movie">Movie</label>
              <input
                type="radio"
                id="movie"
                name="media"
                value="movie"
                checked={media === 'movie'}
                onChange={() => Media('movie')}
              />
            </div>
            <div className="radio">
              <label htmlFor="podcast">Podcast</label>
              <input
                type="radio"
                id="podcast"
                name="media"
                value="podcast"
                checked={media === 'podcast'}
                onChange={() => Media('podcast')}
              />
            </div>
            <div className="radio">
              <label htmlFor="audiobook">Audiobook</label>
              <input
                type="radio"
                id="audiobook"
                name="media"
                value="audiobook"
                checked={media === 'audiobook'}
                onChange={() => Media('audiobook')}
              />
            </div>
            <div className="radio">
              <label htmlFor="short-film">Short Film</label>
              <input
                type="radio"
                id="short-film"
                name="media"
                value="short-film"
                checked={media === 'short-film'}
                onChange={() => Media('short-film')}
              />
            </div>
            <div className="radio">
              <label htmlFor="tv-show">TV Show</label>
              <input
                type="radio"
                id="tv-show"
                name="media"
                value="tv-show"
                checked={media === 'tv-show'}
                onChange={() => Media('tv-show')}
              />
            </div>
            <div className="radio">
              <label htmlFor="software">Software</label>
              <input
                type="radio"
                id="software"
                name="media"
                value="software"
                checked={media === 'software'}
                onChange={() => Media('software')}
              />
            </div>
            <div className="radio">
              <label htmlFor="ebook">Ebook</label>
              <input
                type="radio"
                id="ebook"
                name="media"
                value="ebook"
                checked={media === 'ebook'}
                onChange={() => Media('ebook')}
              />
            </div>
            <div className="radio">
              <label htmlFor="all">All</label>
              <input
                type="radio"
                id="all"
                name="media"
                value="all"
                checked={media === 'all'}
                onChange={() => Media('all')}
              />
            </div>
          </fieldset>
        </form>
      </section>
      <section id="results">
        <h2>
          <GoChevronDown className='reactIcon-down' />
          Scroll down for results.
        </h2>
        <div id='resultsContainer'>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                <img src={result.albumCover} alt={result.albumName} />
                <div className='result-details'>
                  <h3>{result.albumName}</h3>
                  <p className='detail'>Artist: {result.artistName}</p>
                  <p className='detail'>
                    Release Date:&nbsp;
                    {formatDate(result.releaseDate)}
                  </p>
                </div>
                <button onClick={() => toggleFavorite(index)}>
                  {favorites.includes(index) ? (
                    <img className='favoriteIcon' src={starFill} alt="Favorited" />
                  ) : (
                    <img className='favoriteIcon' src={starUnfill} alt="Not favorited" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
