import { useMutation, useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectsServices";

export default function useOwnerProjects() {
    const { isPending: isLoading, data } = useQuery({
        queryKey: ['owner-projects'],
        queryFn: getOwnerProjectsApi
    })

    const { projects } = data || {}

    return { isLoading, projects }
}