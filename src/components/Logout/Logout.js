import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { types, NotificationContext } from '../../contexts/NotificationContext';


import * as authService from '../../services/authService';

const Logout = () => {
    const navigate = useNavigate();
    const { showNotification } = useContext(NotificationContext);
    const { user, logout } = useContext(AuthContext);
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                showNotification('Logged out successfully!', types.success);
                navigate('/');
            });
    }, []);

    return null;
};

export default Logout;