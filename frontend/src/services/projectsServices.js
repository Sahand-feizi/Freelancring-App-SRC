import http from './httpServices'

export const getOwnerProjectsApi = () => {
    return http.get('/project/owner-projects').then(({ data }) => data.data)
}

export const createProjectApi = (data) => {
    return http.post('/project/add', data).then(({ data }) => data.data)
}

export const removeProjectApi = (id) => {
    return http.delete(`/project/${id}`).then(({ data }) => data.data)
}

export const editProjectApi = ({ id, data }) => {
    return http.patch(`/project/update/${id}`, data).then(({ data }) => data.data)
}

export const getProjectApi = (id) => {
    return http.get(`/project/${id}`).then(({ data }) => data.data)
}

export const changeProjectStatusApi = ({ id, data }) => {
    return http.patch(`/project/${id}`, data).then(({ data }) => data.data)
}

export const getProjectsApi = (queryString) => {
    return http.get(`/project/list${queryString}`).then(({data}) => data.data)
}