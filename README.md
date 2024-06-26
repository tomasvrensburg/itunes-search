# iTunes Search Full-Stack App

This is a full-stack application that allows users to search over 100 million songs, movies, TV shows, podcasts, audiobooks, and more from Apple's collection. Users can search by keyword and filter by media type. Additionally, users can mark items as favourites.

<img width="1440" alt="Screenshot 2024-05-09 at 13 41 46" src="https://github.com/tomasvrensburg/itunes-search/assets/60756248/41d74e51-5ce0-47ea-a8a6-8853503d4d4d">
<img width="1440" alt="Screenshot 2024-05-09 at 13 42 40" src="https://github.com/tomasvrensburg/itunes-search/assets/60756248/0238872e-7d13-429d-a657-711988e2c9fb">

## Frontend (React)

The frontend is responsible for handling user input, fetching search results from the backend, and displaying the results. Users can enter a search term, select a media type, and view search results. They can also mark items as favorites.

### Technology Used

- React: JavaScript library for building user interfaces
- Axios: Promise-based HTTP client for making requests to the backend
- React Icons: Library for including icons in React applications
- CSS for styling

## Backend (Node.js & Express)

The backend server is built using Node.js and Express.js. It includes a single route `/search` to fetch music data from the iTunes Search API. Before accessing this route, a JWT token is generated as middleware for authorization.

### Middleware

- `generateToken`: Middleware function to generate a JWT token for authorization.

### Dependencies

- Express: Web application framework for Node.js
- Cors: Middleware for enabling CORS (Cross-Origin Resource Sharing)
- Axios: Promise-based HTTP client for making requests to external APIs
- JWT (jsonwebtoken): Library for generating JSON Web Tokens for authorization

## How to Run

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies for both frontend and backend using `npm install`.
4. Start the backend server by running `npm start` or in the `backend` directory.
5. Start the frontend server by running `npm start` in the `frontend` directory.
6. Open your browser and navigate to frontend `localhost` to access the application.
