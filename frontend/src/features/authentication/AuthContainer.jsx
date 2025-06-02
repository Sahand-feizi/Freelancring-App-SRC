import React, { useState } from 'react'
import SendOtpForm from './SendOtpForm'
import CheckOtpForm from './CheckOtpForm'
import { useForm } from 'react-hook-form'

function AuthContainer() {
    const [step, setStep] = useState(1)
    const { register, formState: { errors }, handleSubmit, getValues } = useForm()
    
    if (step == 1) return (
        <SendOtpForm
            setStep={setStep}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
        />
    )

    return <CheckOtpForm phoneNumber={getValues("phoneNumber")} />
}

export default AuthContainer
