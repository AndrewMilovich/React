import axios from "axios";
import baseUrl from "../config/urls";


let axiosService = axios.create({baseURL:baseUrl});

export {axiosService};