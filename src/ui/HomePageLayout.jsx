import React from 'react'
import { AiFillSafetyCertificate } from "react-icons/ai"
import { SiAntdesign } from "react-icons/si"
import { IoCodeWorking } from "react-icons/io5"
import { BiSupport } from "react-icons/bi";
import { SiNginxproxymanager } from "react-icons/si"
import { FaSquareUpwork } from "react-icons/fa6";
import { useDarkMode } from '../context/DarkModeContext';
import FeatureItem from './FeatureItem'
import AboutUs from './AboutUs';
import Footer from './Footer'
import OurProcessWorkflow from './OurProcessWorkflow';
import GetStartSection from './GetStartSection'
import { useNavigate } from 'react-router-dom';

const FeaturesItem = [
    {
        title: 'پلتفرم امن و قابل اعتماد',
        description: 'امنیت اطلاعات و تراکنش های کاربران اولویت اصلی مااست. تا شما با ارامش کامل پروژه های خود را انجام دهید',
        icon: <AiFillSafetyCertificate />,
        color: 'green',
    },
    {
        title: 'رابط کاربری ساده و کارپسند',
        description: 'طراحی intuitive که فرایند ثبت نام، جستجو و مدیریت پروژه را آسان می کند، حتی برای کاربران مبتدی',
        icon: <SiAntdesign />,
        color: 'red',
    },
    {
        title: 'ابزار های مدیریت پروژه',
        description: 'امکاناتی مانند تعیین زمان تحویل پروژه، امکان اپدیت پروژه وامکانات متعدد دیگر',
        icon: <SiNginxproxymanager />,
        color: 'primary',
    },
    {
        title: 'پیشنهاد های شخصی سازی شده',
        description: 'بر اساس مهارت ها و علایق شما می توانید پروژه های متعددی را دریافت کنید',
        icon: <FaSquareUpwork />,
        color: 'purple',
    },
    {
        title: 'تنوع فرصت های شغلی',
        description: 'اراعه فرصت های کاری در حوزه های مختلف، از طراحی گرافیک و برنامه نویسی گرفته تا ترجمه و نوشتن محتوا',
        icon: <IoCodeWorking />,
        color: 'secondary',
    },
    {
        title: 'پشتیبانی 24/7',
        description: 'تیم پشتیبانی فعال که همواره اماده پاسخگویی به سوالات و حل مشکلات شماست',
        icon: <BiSupport />,
        color: 'orange',
    },
]

function HomePageLayout() {
    const { isDarkMode } = useDarkMode()
    const navigate = useNavigate()

    return (
        <>
            {
                isDarkMode ? (
                    <svg xmlns='http://www.w3.org/2000/svg' className='absolute h-[50rem] top-0 left-0 z-0' width='100%' height="auto" preserveAspectRatio="none" viewBox='0 0 1600 800'><rect fill='#18212F' width='1600' height='800' /><g fill-opacity='1'><path fill='#1b2534' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z' /><path fill='#1d2839' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z' /><path fill='#202c3e' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z' /><path fill='#222f43' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z' /><path fill='#253348' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z' /><path fill='#28364d' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z' /><path fill='#2a3a52' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z' /><path fill='#2d3d56' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z' /><path fill='#2f415b' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z' /><path fill='#324460' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z' /></g></svg>
                ) : (
                    <svg xmlns='http://www.w3.org/2000/svg' className='absolute h-[50rem] top-0 left-0 z-0' width='100%' height="auto" preserveAspectRatio="none" viewBox='0 0 1600 800'><rect fill='#FFFFFF' /><g fill-opacity='1'><path fill='#fbfcff' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z' /><path fill='#f7f8ff' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z' /><path fill='#f2f5ff' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z' /><path fill='#eef1ff' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z' /><path fill='#EAEEFF' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z' /><path fill='#e7ebff' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z' /><path fill='#e4e8ff' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z' /><path fill='#e0e5ff' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z' /><path fill='#dde2ff' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z' /><path fill='#DADFFF' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z' /></g></svg>
                )
            }
            <div className='container'>
                <div id='home' className='flex mt-[10px] sm:mt-[30px] flex-col-reverse z-0 md:items-center md:flex-row md:justify-between container md:max-w-screen-lg mx-auto h-full'>
                    <div className='z-0 w-full md:w-[30rem] flex flex-col gap-y-4 pt-5'>
                        <div>
                            <h1 className='text-rigth font-[950] text-primary-900 text-[35px] sm:text-[45px] md:text-[50px] font-sans'>کارتو راحت و بدون <br /> دردسر پیدا کن</h1>
                            <h2 className='text-rigth text-secondary-500 font-[100] text-lg sm:text-xl my-3'>همین امروز ثبت نام کنید و اولین پروژه خود را ایجاد کنید یابه عنوان فریلنسر به جمع ما بپیوندید.دنیای جدیدی از فرصت ها منتظر شماست !</h2>
                        </div>
                        <button className='btn btn--primary px-6 w-28' onClick={() => navigate('/auth')}>بزن بریم!</button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='md:h-80 md:w-80 h-72 w-72  relative z-0 rounded-full shadow-lg bg-primary-600 shadow-primary-800 flex items-center justify-center'>
                            <img className='object-cover z-10 absolute h-80 w-80 md:h-96 bottom-0 md:w-96' src="/images/homepage.png" alt="image" />
                            <div className='md:h-80 h-72 md:w-80 w-72 z-50 bg-gradient-to-t from-primary-900 to-transparent rounded-full shadow-lg shadow-primary-800'></div>
                        </div>
                    </div>
                </div>
                <div id='features' className='w-full gap-x-4 relative p-4 mt-8 md:p-8 lg:py-16 lg:mt-20 lg:px-8 rounded-xl bg-gradient-to-tr from-primary-800 to-primary-600 lg:flex justify-between'>
                    <div className='space-y-4 text-right w-full lg:w-[19rem] xl:[24rem]'>
                        <h1 className='text-3xl text-white'>ویژگی ها</h1>
                        <p className='font-thin text-gray-100 tracking-[.05em] text-base/6'>ویژگی های منحصر به فرد سایت ما مثل رابط کاربری راحت، ابزار های مدیریت پروژه و ویژگی های متعددی که شمارا از هر سایت دیگری بی نیاز میکند</p>
                        <button className='btn btn--white px-6' onClick={() => navigate('/auth')}>بزن بریم!</button>
                    </div>
                    <div className='grid md:grid-rows-2 md:grid-cols-3 sm:grid-rows-3 sm:grid-cols-2 gap-3 lg:absolute lg:w-[44rem] xl:w-[55rem] w-full lg:left-0 lg:top-0 p-4 lg:p-8'>
                        {
                            FeaturesItem.map(item => (
                                <FeatureItem key={item.color} {...item}/>
                            ))
                        }
                    </div>
                </div>
                <AboutUs />
                <OurProcessWorkflow />
                <GetStartSection />
            </div>
        </>
    )
}

export default HomePageLayout
