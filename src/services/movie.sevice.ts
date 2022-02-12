import {axiosService} from "./axios.service";

import {urls} from "../constants";
import {IMovie, IMovieDetailInterface} from "../interfaces";

export const movieServices = {
    getMovies: (currentPage: number, genreId: string) => axiosService.get<IMovie>(urls.movies + currentPage + `&with_genres=` + genreId + '&with_query='),
    getMovieById: (id: string) => axiosService.get<IMovieDetailInterface>(urls.movie + `${id}?api_key=9d15905010c06db187e7f83aec2cef70`),
    getMovieByName: (name: string, currentPage: number) => axiosService.get<IMovie>(urls.name + name + '&page=' + currentPage)
}