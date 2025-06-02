import React from 'react'
import RHFselect from '../../ui/RHFselect'
import { useForm } from 'react-hook-form'
import useChangeProposalStatus from './useChangeProposalStatus'
import Loading from '../../ui/Loading'
import { useParams } from 'react-router-dom'

function ChangeProposalStatus({ options, onClose, proposalId }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { isUpdating, changeProposalsStatus } = useChangeProposalStatus()
    const { id: projectId } = useParams()

    const onSubmit = (data) => {
        const proposalData = {
            proposalId,
            projectId,
            ...data
        }

        changeProposalsStatus(proposalData, {
            onSuccess: () => {
                onClose()
                // reset()
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='pt-5 space-y-2'>
            <RHFselect
                labelValue='وضعیت'
                name='status'
                options={options}
                register={register}
                validationSchema={{
                    required: 'وضعیت ضروری است'
                }}
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

export default ChangeProposalStatus
