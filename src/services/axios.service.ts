import axios from "axios";

import baseURL from "../constants/urls";
import ReqUrl from "../constants/ReqUrl";

export const axiosService = axios.create({baseURL});
export const axiosServiceReg = axios.create({baseURL:ReqUrl});