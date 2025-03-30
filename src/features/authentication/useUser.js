import { useQuery } from "@tanstack/react-query";
import { getUserProfileApi } from "../../services/authServices";

export default function useUser() {
    const { isPending: isLoading, data } = useQuery({
        queryKey: ['user'],
        queryFn: getUserProfileApi
    })

    const { user } = data || {};

    return { isLoading, user }
}