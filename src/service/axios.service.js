import baseURL from "../config/urls";
import axios from "axios";

export const axiosService=axios.create({baseURL})

