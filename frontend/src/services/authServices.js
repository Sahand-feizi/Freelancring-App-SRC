import http from './httpServices'

export const getOtpApi = (data) => {
    return http.post('/user/get-otp', data).then(({ data }) => data.data)
}

export const checkOtpApi = (data) => {
    return http.post('/user/check-otp', data).then(({ data }) => data.data)
}

export const completeProfileApi = (data) => {
    return http.post('/user/complete-profile', data).then(({ data }) => data.data)
}

export const getUserProfileApi = () => {
    return http.get('/user/profile').then(({ data }) => data.data)
}

export const logoutApi = () => {
    return http.post('/user/logout').then(({ data }) => data)
}

export const getUsersApi = () => {
    return http.get('/admin/user/list').then(({ data }) => data.data)
}

export const changeUserStatusApi = ({ id, data }) => {
    return http.patch(`/admin/user/verify/${id}`, data).then(({ data }) => data.data)
} 