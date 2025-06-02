import { useMutation } from "@tanstack/react-query";
import { getOtpApi } from "../../services/authServices";
import toast from "react-hot-toast";

export default function useGetOtp() {
    const { isPending: isLoading, mutate: getOtp } = useMutation({
        mutationFn: getOtpApi,
        onSuccess: (data) => {
            console.log(data);

        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isLoading, getOtp }
}