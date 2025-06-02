import { useMutation } from "@tanstack/react-query";
import { checkOtpApi } from "../../services/authServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckOtp() {
    const navigate = useNavigate()

    const {isPending: isLoading, mutate: checkOtp} = useMutation({
        mutationFn: checkOtpApi,
        onSuccess: ({user, message}) => {
            if(!user.isActive) return navigate('/complete-profile')
            if(user.status !== 2) {
                navigate('/')
                toast(message, {
                    icon:'👏'
                })

                return ''
            }
            console.log(user.role);
            
            if(user.role == 'OWNER') return navigate('/owner')
            if(user.role == 'FREELANCER') return navigate('/freelancer')
            if(user.role == 'ADMIN') return navigate('/admin')

            toast.success(message)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isLoading, checkOtp }
}