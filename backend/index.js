// Import necessary modules
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jwt = require('jsonwebtoken');

// Create an instance of Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Middleware to generate a JWT token
const generateToken = (req, res, next) => {
  // Generate a JWT token
  const token = jwt.sign({ authorized: true }, 'jwt_secret_key');
  req.token = token;
  next();
};

// Route to fetch music data from iTunes Search API
app.get('/search', generateToken, async (req, res) => {
  try {
    const { term, media } = req.query;
    if (!term || !media) {
      return res.status(400).json({ error: 'Parameter is required' });
    }

    // Make a request to iTunes Search API
    const response = await axios.get('https://itunes.apple.com/search', {
      params: {
        term: term,
        media: media,
        limit: 10
      }
    });

    // Creating easier to work with variables from API results
    const albums = response.data.results.map(album => ({
      albumName: album.collectionName,
      artistName: album.artistName,
      albumCover: album.artworkUrl100,
      releaseDate: album.releaseDate
    }));

    res.json(albums);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
