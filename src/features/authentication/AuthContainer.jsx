import React, { useState } from 'react'
import SendOtpForm from './SendOtpForm'
import CheckOtpForm from './CheckOtpForm'
import { useForm } from 'react-hook-form'

function AuthContainer() {
    const [step, setStep] = useState(1)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    if (step == 1) return (
        <SendOtpForm
            setStep={setStep}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            reset={reset}
        />
    )

    return <CheckOtpForm setStep={setStep} />
}

export default AuthContainer
