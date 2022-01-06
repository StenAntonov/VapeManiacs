import { createContext, useState } from 'react';

export const AuthContext = createContext();

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: ''
};


export const AuthProvider = ({
    children
}) => {

    const [user, setUser] = useState('user', initialAuthState);

    const login = (authData) => {
        setUser(authData);
    };

    const logout = () => {
        setUser(initialAuthState);
    };
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

