import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const episodeService={
    getAll:()=>axiosService.get(urls.episode).then(value => value.data),
    getById:(id)=>axiosService.get(`${urls.episode}?page=${id}`).then(value => value.data)
}