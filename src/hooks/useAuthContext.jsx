/* eslint-disable react/prop-types */
import React from 'react';

const AuthContext = React.createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
    return React.useContext(AuthContext)
}

function AuthContextProvider({ children, authData }) {
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;