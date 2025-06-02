import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
    const { isLoading, user } = useUser()
    const { pathname } = useLocation()

    let isAuthenticated = false;
    if (user) isAuthenticated = true;

    let isVerified = false;
    if (user && user.status == 2) isVerified = true;

    const desiredRole = pathname.split('/').at(1);
    const ROLES = {
        owner: 'OWNER',
        freelancer: 'FREELANCER',
        admin: 'ADMIN'
    }
    let isAuthorized = false;

    if (Object.keys(ROLES).includes(desiredRole)) {
        if (user && ROLES[desiredRole] == user.role) isAuthorized = true
    }

    return { isLoading, isAuthenticated, isVerified, isAuthorized}
}