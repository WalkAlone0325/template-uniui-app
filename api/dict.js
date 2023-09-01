import http from '@/utils/request.js'

export const getData = (params) => http.get('/get', params)
