import React, { useEffect } from 'react'
import useAuthorize from '../features/authentication/useAuthorize'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function ProtectRoute({ children }) {
    const { isLoading, isAuthenticated, isVerified, isAuthorized } = useAuthorize()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            navigate('/complete-profile')
            toast.error('شما در برنامه ثبت نام نکرده اید')
            return ''
        }
        if (!isVerified && !isLoading) {
            navigate('/')
            toast('پروفایل شما تا کنون تایید نشده است', {
                icon: '👏'
            })
            return ''
        }
        if (!isAuthorized && !isLoading) {
            navigate('/not-access')
            toast.error('شما به این قسمت از برنامه دسترسی ندارید')
            return ''
        }
    }, [isLoading, isAuthenticated, isVerified, isAuthorized])
    
    if (isLoading)
        return (
            <div className="flex items-center justify-center h-screen bg-secondary-100">
                <Loading width={80} height={80} />
            </div>
        );

    if (isAuthenticated && isAuthorized) return children;
}

export default ProtectRoute
