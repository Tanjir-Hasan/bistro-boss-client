import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { useAdmin } from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();


    if (loading || isAdminLoading) {
        return <div>Loading</div>
    }

    if (user && isAdmin) {
        return children;
    }
    // 
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;;
};

export default AdminRoute;