import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProposalsStatusApi } from "../../services/proposalsServices";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function useChangeProposalStatus() {
    const queryClient = useQueryClient()
    const { id } = useParams()

    const { isPending: isUpdating, mutate: changeProposalsStatus } = useMutation({
        mutationFn: changeProposalsStatusApi,
        onSuccess: () => {
            toast.success('عملیات با موفقیت انجام شد')

            queryClient.invalidateQueries({
                queryKey: ['project', id]
            })
        },
        onError: (err) => {
            console.log(err);
            
            toast.error(err?.response?.data?.message)
        }
    })

    return { isUpdating, changeProposalsStatus }
}