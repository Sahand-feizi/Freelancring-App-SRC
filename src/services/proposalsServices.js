import http from "./httpServices";

export const changeProposalsStatusApi = ({ proposalId, ...rest }) => {
    http.patch(`/proposal/${proposalId}`, rest).then(({ data }) => data.data)
}