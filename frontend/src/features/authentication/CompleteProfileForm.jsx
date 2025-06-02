import React from 'react'
import TextField from '../../ui/TextField'
import { useForm } from 'react-hook-form'
import RadioGroup from '../../ui/RadioGroup'
import useCompleteProfile from './useCopleteProfile'
import Loading from '../../ui/Loading'

function CompleteProfileForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const { completeProfile, isLoading } = useCompleteProfile()

    const onSubmit = (data) => {
        completeProfile(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
            <TextField
                name='name'
                labelValue='نام کاربری'
                register={register}
                validationSchema={{
                    required: 'نام کاربری ضروری است',
                    minLength: {
                        value: 8,
                        message: 'نام کاربری حداقل باید 8 کاراکتر باشد'
                    },
                    maxLength: {
                        value: 15,
                        message: 'نام کاربری باید حداکثر 15 کاراکتر باشد'
                    }
                }}
                errors={errors}
                required
            />
            <TextField
                name='email'
                labelValue='ایمیل'
                register={register}
                validationSchema={{
                    required: 'ایمیل ضروری است',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'ایمیل ضروری است'
                    }
                }}
                errors={errors}
                required
            />
            <div className='flex justify-center my-32'>
                <RadioGroup
                    name='role'
                    options={[
                        {
                            label: 'کارفرما',
                            value: 'OWNER'
                        },
                        {
                            label: 'فریلنسر',
                            value: 'FREELANCER'
                        }
                    ]}
                    register={register}
                    validationSchema={{
                        required: 'این فیلد ضروری است'
                    }}
                    errors={errors}
                    watch={watch}
                />
            </div>
            <div className='flex items-center justify-between'>
                {
                    isLoading ? (
                        <Loading width={80} height={80} />
                    ) : (
                        <button type='submit' className='btn btn--primary w-full'>تایید</button>
                    )
                }
            </div>
        </form>
    )
}

export default CompleteProfileForm
