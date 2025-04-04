import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectsServices";

export default function useProjects() {
    const { isPending: isLoading, data } = useQuery({
        queryKey: ['projects'],
        queryFn: getProjectsApi
    })

    const { projects } = data || {}

    return { isLoading, projects }
}