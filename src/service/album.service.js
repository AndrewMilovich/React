import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const albumService={
    getAll:()=>axiosService.get(urls.albums).then(value => value.data),
    getPhoto:(id)=>axiosService.get(`${urls.photos}?albumId=${id}`).then(value => value.data)
}