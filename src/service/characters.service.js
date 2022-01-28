import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const charactersService={
    getById:(id)=>axiosService.get(`${urls.character}/ ${id}`).then(value =>value.data)
}