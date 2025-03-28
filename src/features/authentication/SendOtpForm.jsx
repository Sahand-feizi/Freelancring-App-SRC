import React from 'react'
import TextField from '../../ui/TextField'
import { useForm } from 'react-hook-form'
import useGetOtp from './useGetOtp'
import Loading from '../../ui/Loading'

function SendOtpForm({ register, handleSubmit,  errors, reset, setStep }) {
    
    const { isLoading, getOtp } = useGetOtp()

    const onSubmit = (data) => {
        getOtp(data, {
            onSuccess: () => {
                reset()
                setStep(2)
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
            <TextField
                labelValue='شماره موبایل'
                name='phoneNumber'
                errors={errors}
                register={register}
                validationSchema={{
                    required: 'شماره موبایل ضروری است'
                }}
                required
            />
            <div className='flex justify-center items-center'>
                {
                    isLoading ? (
                        <Loading width={80} height={80}/>
                    ) : (
                        <button type='submit' className='btn btn--primary w-full'>تایید</button>
                    )
                }
            </div>
        </form>
    )
}

export default SendOtpForm
