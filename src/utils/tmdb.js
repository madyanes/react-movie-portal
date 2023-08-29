/* eslint-disable no-console */
async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  });
}

async function getAllMovies(page = 1) {
  const path = `/movie/changes?page=${page}`;
  const response = await fetchWithToken(`${import.meta.env.VITE_TMDB_API_URL}${path}`);
  const data = await response.json();
  console.log(data);
}

export default getAllMovies;
