import React from 'react'

function AboutUs() {
    return (
        <div id='aboutUs' className='w-full lg:mt-20 !px-0 !pb-0 flex flex-col-reverse items-center justify-between gap-y-4 gap-x-4 mt-16 lg:pt-12 lg:container lg:flex-row'>
            <div className="lg:flex-1 py-4 lg:py-12 px-4 bg-secondary-0 rounded-2xl lg:space-y-16 max-h-full">
                <h1 className='font-bold text-2xl lg:text-3xl text-secondary-800'>آرزوی ما ایجاد شغل ها فوق العاده برای شما فریلنسر ها عزیز است!</h1>
                <p className='font-thin lg:text-lg text-base text-secondary-700'>ما در فریلنسر اپ، یک پلتفرم فریلنسری متعهد به ایجاد ارتباط مؤثر بین کارفرمایان و فریلنسرهای ماهر هستیم. هدف ما فراهم کردن فضایی امن، سریع و کارآمد برای انجام پروژه‌های مختلف در حوزه‌های متنوع است. با تیمی متشکل از افراد متخصص و پرتلاش، تلاش می‌کنیم تا بهترین فرصت‌ها را برای فریلنسرها فراهم کنیم و به کارفرمایان کمک کنیم تا پروژه‌های خود را با کیفیت بالا و در کمترین زمان ممکن انجام دهند.در فریلنسر اپ، اعتقاد داریم که همکاری و اعتماد کلید موفقیت است. بنابراین، امکاناتی مانند سیستم امتیازدهی، پشتیبانی 24/7 و راهکارهای امن پرداخت را فراهم کرده‌ایم تا تجربه‌ای رضایت‌بخش برای همه کاربران رقم بخورد.</p>
            </div>
            <div className='lg:flex-1 space-y-4 md:flex md:flex-row-reverse md:space-x-2 md:space-y-0 lg:flex-col lg:gap-y-4'>
                <div className='w-full rounded-2xl relative overflow-hidden mx-auto bg-[url("./images/liquid-cheese.png")] bg-cover'>
                    <img src="./images/aboutUs.png" alt="image" className='z-10 object-cover md:w-[22rem]' />
                </div>
                <div className='grid grid-cols-2 grid-rows-2 w-full p-4 gap-2 rounded-2xl bg-secondary-0'>
                    <div className='py-2 px-3 bg-secondary-100 rounded-xl space-y-3'>
                        <h1 className='text-secondary-800 font-bold text-2xl lg:text-4xl font-yekan'>3</h1>
                        <p className='text-secondary-800 font-thin text-base lg:text-lg'>تعداد کاربران سایت</p>
                    </div>
                    <div className='py-2 px-3 bg-secondary-100 rounded-xl space-y-3'>
                        <h1 className='text-secondary-800 font-bold text-2xl lg:text-4xl font-yekan'>23</h1>
                        <p className='text-secondary-800 font-thin text-base lg:text-lg'>تعداد پروژه های ایجاد شده</p>
                    </div>
                    <div className='py-2 px-3 bg-secondary-100 rounded-xl space-y-3'>
                        <h1 className='text-secondary-800 font-bold text-2xl md:text-4xl font-yekan'>5</h1>
                        <p className='text-secondary-800 font-thin text-base md:text-lg'>تعداد کاربران سایت</p>
                    </div>
                    <div className='py-2 px-3 bg-secondary-100 rounded-xl space-y-2'>
                        <h1 className='text-secondary-800 font-bold text-2xl md:text-4xl font-yekan'>5</h1>
                        <p className='text-secondary-800 font-thin text-base md:text-lg'>تعداد کاربران سایت</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
