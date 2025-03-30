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