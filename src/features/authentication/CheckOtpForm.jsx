import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import CircleTimer from '../../ui/CircleTimer'
import useGetOtp from './useGetOtp'
import useCheckOtp from './useCheckOtp'
import Loading from '../../ui/Loading'

const initialRemainingTime = 90

function CheckOtpForm({ phoneNumber }) {
  const [otp, setOtp] = useState()
  const [time, setTime] = useState(initialRemainingTime)
  const { getOtp } = useGetOtp()
  const { isLoading, checkOtp } = useCheckOtp()

  const handelCheckOtp = (e) => {
    e.preventDefault()
    checkOtp({ phoneNumber, otp })
  }

  return (
    <form className='space-y-3' onSubmit={handelCheckOtp}>
      {
        time <= 0 ? (
          <button onClick={() => getOtp({ phoneNumber })} className='btn btn--secondary block'>ارسال مجدد کد تایید</button>
        ) : (
          <CircleTimer initialValue={initialRemainingTime} setValue={setTime} />
        )
      }
      <span className='font-thin text-success mt-2'>کد تایید برای شماره موبایل {phoneNumber} ارسال گردید</span>
      <div className='space-y-2'>
        <span className='font-thin block'>کد تایید را وارد کنید</span>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className='text-primary-900 font-thin'>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle='w-full flex gap-x-2 justify-center flex-row-reverse'
          inputStyle='!w-10 p-2 rounded-lg border border-primary-500 transition-all duration-100 outline-none focus:border-[1.3px] focus:border-primary-900 focus:shadow-lg focus:shadow-primary-100 font-thin'
        />
      </div>
      <div className='flex justify-center items-center'>
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

export default CheckOtpForm
