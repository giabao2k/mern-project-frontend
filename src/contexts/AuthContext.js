import { createContext, useReducer } from 'react';
import { authReducer } from '../reducers/authReducers';
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants';
import axios from 'axios';

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null,
    });

    //Login

    const loginUser = async (userForm) => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`);
            if (response.data.success);
            localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);
            return response.data;
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            } else return { success: false, message: error.message };
        }
    };

    // Context data
    const authContextData = { loginUser };

    // Return provider
    return <AuthContextProvider value={authContextData}>{children}</AuthContextProvider>;
};

export default AuthContextProvider;
