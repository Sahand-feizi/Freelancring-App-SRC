import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPropoalApi } from "../../services/proposalsServices";
import toast from "react-hot-toast";

export default function useCreateProposal() {
    const queryClient = useQueryClient()

    const { isPending: isCreating, mutate: createProposal } = useMutation({
        mutationFn: createPropoalApi,
        onSuccess: ({ message }) => {
            toast.success(message)

            queryClient.invalidateQueries({
                queryKey: ['projects']
            })
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isCreating, createProposal }
}