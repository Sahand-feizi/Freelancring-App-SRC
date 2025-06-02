import http from './httpServices'

export const getCategoriesApi = () => {
    return http.get('/category/list').then(({ data }) => data.data)
}