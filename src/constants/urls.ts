const baseURL = 'https://api.themoviedb.org/3'

export default baseURL;

export const urls = {
    movies: '/discover/movie?api_key=9d15905010c06db187e7f83aec2cef70&page=',
    genres: '/genre/movie/list?api_key=9d15905010c06db187e7f83aec2cef70',
    image: 'https://image.tmdb.org/t/p/w500',
    movie: '/movie/',
    name: '/search/movie?api_key=9d15905010c06db187e7f83aec2cef70&query=',
    registration: '/auth/registration',
    login: '/auth/login'
}
