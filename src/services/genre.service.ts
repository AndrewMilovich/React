import {axiosService} from "./axios.service";

import {urls} from "../constants";
import {IGenre} from "../interfaces/genre.interface";

export const genreService={
    getGenres:()=>axiosService.get<IGenre>(urls.genres)
}