import http from './httpServices'

export const getOtpApi = (data) => {
    return http.post('/user/get-otp', data).then(({data}) => data.data)
}