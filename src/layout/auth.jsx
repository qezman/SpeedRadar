import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { toast } from 'react-toastify';

import Login from "../component/login";
import { auth } from "../firebase";
import AuthContextProvider from "../hooks/useAuthContext";

// eslint-disable-next-line react/prop-types
function AuthLayout({ children }) {
  const [authenticated, setAuthenticated] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user, error) => {
      if (error) {
        toast.error(error.code || error.message || 'Unable to verify user authentication status...');
        setLoading(false);
      } else if (user) {
        setAuthenticated({
          displayName: user.displayName,
          email: user.email,
          id: user.uid,
          image: user.photoURL,
          phone: user.phoneNumber,
        });
        setLoading(false);
      } else {
        setAuthenticated(null);
        setLoading(false);
      }
    });
  }, []);

    if (loading) return (
        <div className="flex flex-col justify-center h-full items-center min-h-[50vh] w-full py-4">
            <div className="animate-spin h-8 w-8 rounded-full bg-transparent border-t-2 border-b-2  border-white" />
            <p className="animate-pulse my-3 text-center text-gray-100">Checking Authentication Status...</p>
        </div>
    )

  return <AuthContextProvider authData={{
    auth: authenticated,
    loading,
  }}>
    {authenticated ? children :  <Login />}
  </AuthContextProvider>
}

export default AuthLayout;
