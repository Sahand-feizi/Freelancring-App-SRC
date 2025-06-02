import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../../services/authServices";

export default function useUsers() {
    const { isPending: isLoading, data } = useQuery({
        queryKey: ['users'],
        queryFn: getUsersApi
    })

    const { users } = data || []

    return { isLoading, users }
}