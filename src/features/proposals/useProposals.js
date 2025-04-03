import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from '../../services/proposalsServices'

export default function useProposals() {
    const { isPending: isLoading, data } = useQuery({
        queryKey: ['proposals'],
        queryFn: getProposalsApi
    })

    const { proposals } = data || {}

    return { isLoading, proposals }
}