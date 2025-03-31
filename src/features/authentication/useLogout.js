import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogout() {
    const navigate = useNavigate()

    const { isPending: isLoading, mutate: logout } = useMutation({
        mutationFn: logoutApi,
        onSuccess: ({ message }) => {
            navigate('/auth')
            toast.success(message)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isLoading, logout }
}