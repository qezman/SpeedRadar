import React from "react";
import { toast } from 'react-toastify';

import { logout } from "../firebase/auth";

function LogoutButton() {
  const [loading, setLoading] = React.useState(false);

  const classNames = React.useMemo(() => {
    let className = "px-4 py-2 text-white text-center rounded-md transform transition "
    if (loading) className += "bg-gray-400 cursor-not-allowed"
    else className += "bg-green-700 cursor-pointer hover:bg-green-600 active:scale-95"
    return className
  }, [loading])

  const handleLogout = React.useCallback(async () => {
        try {
            setLoading(true);
            await logout();
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
  }, []);

  return (
    <button
      disabled={loading}
      onClick={handleLogout}
      className={classNames}
    >
      {loading ? 'Signing out...' : 'Logout'}
    </button>
  );
}

export default LogoutButton;
