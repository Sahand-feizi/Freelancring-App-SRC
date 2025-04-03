import http from "./httpServices";

export const changeProposalsStatusApi = ({ proposalId, ...rest }) => {
    return http.patch(`/proposal/${proposalId}`, rest).then(({ data }) => data.data)
}

export const getProposalsApi = () => {
    return http.get('/proposal/list').then(({ data }) => data.data)
}