// API KEY FROM The Movie Database TMDB
const API_KEY = "fb9191XXXXXXXXXXXXXXXXXXXXXXXXXXXXxx";


const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchTrendingTvDay: `/trending/movie/day?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchComedyTV: `/discover/tv?api_key=${API_KEY}&with_networks=35`,
  fetchActionTV: `/discover/tv?api_key=${API_KEY}&with_networks=28`,
  fetchHorrorTV: `/discover/tv?api_key=${API_KEY}&with_networks=26`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorroeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentriesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchMovies: `/discover/movie?api_key=${API_KEY}&language=en-us`,
};

export default requests;
