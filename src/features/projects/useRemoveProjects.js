import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectsServices";
import toast from "react-hot-toast";

export default function useRemoveProject() {
    const queryClient = useQueryClient()

    const { isPending: isDeleting, mutate: removeProject } = useMutation({
        mutationFn: removeProjectApi,
        onSuccess: ({ message }) => {
            toast.success(message)

            queryClient.invalidateQueries({
                queryKey: ['owner-projects']
            })
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isDeleting, removeProject }
}