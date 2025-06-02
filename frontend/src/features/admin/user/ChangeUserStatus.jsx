import React from 'react'
import RHFselect from '../../../ui/RHFselect'
import { useForm } from 'react-hook-form'
import useChangeUserStatus from './useChangeUserStatus'
import Loading from '../../../ui/Loading'

const statusOptions = [
    {
        title: 'رد شده',
        value: 0
    },
    {
        title: 'در انتظار تایید',
        value: 1
    },
    {
        title: 'تایید شده',
        value: 2
    }
]

function ChangeUserStatus({ onClose, id }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { isUpdating, changeUserStatus } = useChangeUserStatus()

    const onSubmit = (data) => {
        changeUserStatus({ id, data }, {
            onSuccess: () => {
                onClose()
                reset()
            }
        })
    }

    return (
        <form className='pt-5 space-y-2' onSubmit={handleSubmit(onSubmit)}>
            <RHFselect
                name='status'
                labelValue='تغییر وضعیت'
                register={register}
                validationSchema={{
                    required: 'وضعیت ضروری است'
                }}
                options={statusOptions}
                errors={errors}
                required
            />
            <div className='flex items-center justify-between gap-x-2 pt-2'>
                {
                    isUpdating ? (
                        <Loading width={80} height={80} />
                    ) : (
                        <>
                            <button type='submit' className='btn btn--primary flex-1'>تایید</button>
                            <button onClick={onClose} className='btn btn--danger flex-1'>لغو</button>
                        </>
                    )
                }
            </div>
        </form>
    )
}

export default ChangeUserStatus
