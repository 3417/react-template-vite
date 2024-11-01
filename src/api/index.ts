import request from "./request";




export const getHomeData = (params) => request.get('/home',params);