import React from 'react'

const dataOfTheOurProcessWorkFlow = [
    {
        number: '01',
        title: 'مرحله اول: ایجاد یک پروفایل قوی',
        text: 'تخصص‌هات رو مشخص کن: مهارت‌هایی که داری رو دقیق و کامل بنویس نمونه کار بذار: نمونه کارهایی که نشون بده تو کارت حرفه‌ای هستی رو حتماً قرار بده. یه معرفی‌نامه جذاب بنویس: خودت رو به کارفرماها معرفی کن و بگو چرا برای انجام پروژه‌هاشون مناسبی.'
    },
    {
        number: '02',
        title: 'مرحله اول: جستجوی فعال',
        text: 'پروژه‌ها رو بررسی کن: هر روز پروژه‌های جدید رو ببین و اونایی که به تخصصت می‌خورن رو انتخاب کن. از کلمات کلیدی استفاده کن: برای پیدا کردن پروژه‌های مرتبط، از کلمات کلیدی مناسب استفاده کن.'
    },
    {
        number: '03',
        title: 'مرحله اول: ارسال پیشنهاد حرفه‌ای',
        text: 'پیشنهادت رو شخصی‌سازی کن: یه پیشنهاد عمومی نفرست؛ به کارفرما نشون بده که نیازش رو فهمیدی و می‌تونی کمکش کنی. قیمت مناسب پیشنهاد بده: قیمت‌هات رو با توجه به میزان کار و بودجه کارفرما تعیین کن.',
    }
]

function OurProcessWorkflow() {
    return (
        <div id='ourProcessWork' className='mt-4 lg:contianer'>
            <div className="w-full py-4 px-4 sm:px-8 md:px-0 md:p-8 rounded-xl bg-primary-500/10">
                <div className='max-w-screen-md mx-auto space-y-3 md:space-y-8'>
                    <h1 className='text-center text-secondary-900 font-bold text-2xl sm:text-3xl '>کار رویایی تو خودت توی <br /> سه مرحله پیدا کن</h1>
                    <p className='text-secondary-900 font-thin text-sm sm:text-base md:text-lg text-center'>در این سایت، معتقدیم که یک روند کاری روان و شفاف کلید موفقیت در همکاری‌ها است. فرآیند ما به گونه‌ای طراحی شده است که ارتباط بین مشتریان و فریلنسرهای با استعداد را به صورت کارآمد و مؤثر برقرار کند. در ادامه نحوه کار را مشاهده می‌کنید:</p>
                </div>
                <div className="lg:flex flex-1 lg:gap-x-12 lg:items-center lg:justify-center mt-5 lg:mt-15 lg:px-10">
                    <div className='flex-1 grid grid-rows-3 space-y-4'>
                        {
                            dataOfTheOurProcessWorkFlow.map(item => (
                                <ItemOfOurProccess {...item} />
                            ))
                        }
                    </div>
                    <div className='hidden lg:flex justify-center items-center'>
                        <div className='md:h-80 md:w-80 h-72 w-72  relative z-0 rounded-full shadow-lg bg-primary-600 shadow-primary-800 flex items-center justify-center'>
                            <img className='object-cover z-10 absolute h-80 w-80 md:h-96 bottom-0 md:w-96' src="/images/ourProcess.png" alt="image" />
                            <div className='md:h-80 h-72 md:w-80 w-72 z-50 bg-gradient-to-t from-primary-900 to-transparent rounded-full shadow-lg shadow-primary-800'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProcessWorkflow


function ItemOfOurProccess({ title, text, number }) {
    return (
        <div className='flex sm:space-x-8 relative sm:pr-10 sm:mr-4'>
            <div className='hidden sm:flex h-[3.2rem] w-[3.2rem] text-primary-700 bg-transparent justify-center items-start bg-secondary-100 border-[.5rem] border-primary-900 font-yekan text-xl rounded-full absolute -right-5'>{number}</div>
            <div className='!m-0'>
                <h2 className='md:text-lg text-[1rem] font-bold text-primary-900'>{title}</h2>
                <p className='md:text-sm text-[.8rem] font-thin text-secondary-700'>{text}</p>
            </div>
        </div>
    )
}