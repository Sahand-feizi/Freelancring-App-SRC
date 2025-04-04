import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '../../ui/TextField'
import useCreateProposal from '../proposals/useCreateProposal'
import Loading from '../../ui/Loading'

function CreateProposalForm({ onClose, projectId }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { isCreating, createProposal } = useCreateProposal()

    const onSubmit = (data) => {
        createProposal({ ...data, projectId }, {
            onSuccess: () => {
                onClose()
                reset()
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 pt-5'>
            <TextField
                labelValue='توضیحات'
                name='description'
                register={register}
                validationSchema={{
                    required: 'توضیحات ضروری است',
                    minLength: {
                        value: 8,
                        message: 'توضیحات حداقل باید 8 کاراکتر باشد'
                    },
                    maxLength: {
                        value: 30,
                        message: 'توضیحات حداکثر باید 30 کاراکتر باشد'
                    }
                }}
                errors={errors}
                required
            />
            <TextField
                labelValue='زمان تحویل'
                name='duration'
                register={register}
                validationSchema={{
                    required: 'زمان تحویل ضروری است',
                }}
                errors={errors}
                required
            />
            <TextField
                labelValue='بودجه'
                name='price'
                register={register}
                validationSchema={{
                    required: 'بودجه ضروری است',
                }}
                errors={errors}
                required
            />
            <div className='flex items-center justify-between gap-x-2 pt-2'>
                {
                    isCreating ? (
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

export default CreateProposalForm
