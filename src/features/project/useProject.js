import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from '../../services/projectsServices'
import { useParams } from "react-router-dom";

export default function useProject() {
    const { id } = useParams()

    const { isPending: isLoading, data } = useQuery({
        queryKey: ['project', id],
        queryFn: () => getProjectApi(id)
    })

    const { project } = data || {}

    return { isLoading, project }
}