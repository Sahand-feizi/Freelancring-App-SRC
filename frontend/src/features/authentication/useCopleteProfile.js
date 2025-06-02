import { useMutation } from "@tanstack/react-query";
import { completeProfileApi } from "../../services/authServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCompleteProfile() {
    const navigate = useNavigate()

    const {isPending: isLoading, mutate: completeProfile} = useMutation({
        mutationFn: completeProfileApi,
        onSuccess: ({message, user}) => {
            toast.success(message)
            if(user.status !== 2){
                navigate('/')
                toast('پرو فایل شما در انتظار تایید است',{
                    icon:'👏'
                })
                return ''
            }
            if(user.role == 'OWNER') navigate('/owner')
            if(user.role == 'FREELANCER') navigate('/freelancer')
            if(user.role == 'ADMIN') navigate('/admin')
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isLoading, completeProfile }
}