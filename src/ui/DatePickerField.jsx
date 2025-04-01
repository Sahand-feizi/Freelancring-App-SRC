import React from 'react'
import DatePicker from 'react-multi-date-picker'
import persian_fa from 'react-date-object/locales/persian_fa'
import persian from 'react-date-object/calendars/persian'

function DatePickerField({value, setValue}) {
    return (
        <div className='space-y-2'>
            <span className='font-thin text-secondary-800 block'>ددلاین</span>
            <DatePicker
                containerClassName="w-full"
                inputClass="textField"
                calendarPosition="bottom-center"
                value={value}
                onChange={(date) => setValue(date)}
                format="YYYY/MM/DD"
                calendar={persian}
                locale={persian_fa}
            />
        </div>
    )
}

export default DatePickerField
