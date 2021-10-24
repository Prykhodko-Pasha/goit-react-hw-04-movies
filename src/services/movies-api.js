const API_KEY = '352acb8d318346b404dce557309fb342';

export function fetchTrendingMovies(pageNumber) {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${pageNumber}`,
  )
    .then(response => response.json())
    .catch(error => Promise.reject(error));
}
