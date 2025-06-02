import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProjectApi } from "../../services/projectsServices";

export default function useCreateNewProject() {
    const queryClient = useQueryClient()

    const { isPending: isCreating, mutate: createNewProject } = useMutation({
        mutationFn: createProjectApi,
        onSuccess: ({ message }) => {
            toast.success(message)
            console.log(message);
            

            queryClient.invalidateQueries({
                queryKey: ['owner-projects']
            })
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isCreating, createNewProject }
}