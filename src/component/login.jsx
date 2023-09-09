import React from "react";
import { toast } from "react-toastify";

import ResetPassword from "./Password";
import { emailPasswordLogin } from "../firebase/auth";

// eslint-disable-next-line react/prop-types
const Login = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);

  const passwordResetRef = React.useRef();

  const handleChange = React.useCallback(({ target: { name, value } }) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const loginUser = React.useCallback(async (form) => {
    try {
      setLoading(true);
      await emailPasswordLogin(form);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();

      if (!form.email) {
        toast.error("Email address is required.");
      } else if (!form.password) {
        toast.error("Password is required.");
      } else {
        // login the user;
        loginUser(form);
      }
    },
    [form, loginUser]
  );

  return (
    <>
    <section className={"h-screen text-center pt-20 lg:pt-10"}>
      <form
        onSubmit={handleSubmit}
        className={
          "lg:border lg:rounded lg:shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] lg:w-7/12 lg:mx-auto lg:py-16"
        }
      >
        <div>
          <h1
            className={
              "text-4xl lg:text-6xl text-gray-300 font-semibold shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
            }
          >
            SpeedApp
          </h1>
          <p
            className={
              "text-2xl lg:text-4xl pt-10 text-gray-300 text-white font-semibold shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
            }
          >
            Login
          </p>
        </div>
        {loading && (
          <div className="flex justify-center py-4">
                <div className="animate-spin h-8 w-8 rounded-full bg-transparent border-t-2 border-b-2  border-white" />
          </div>
        )}
        <div>
          <input
            type="email"
            name="email"
            className={
              "text-gray-500 bg-gray-800 outline-none transparent py-2 px-3 w-5/12 mx-auto mt-10 shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
            }
            value={form.email}
            placeholder="Enter Email address"
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
            className={
              "text-gray-500 bg-gray-800 outline-none transparent py-2 px-3 w-5/12 mx-auto mt-10 shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
            }
            value={form.password}
            disabled={loading}
          />
        </div>
        <div className={"mt-8"}>
          <button
            className={
              "border rounded  hover:bg-gray-800 text-2xl px-8 py-1 text-gray-400"
            }
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </div>
        <p 
            onClick={() => {
                if (passwordResetRef.current) {
                    passwordResetRef.current.open()
                }
            }}
            className="text-right cursor-pointer mt-3 pr-8 text-gray-400 italic active:scale-x-95 transform transition hover:underline">
              Reset Password
            </p>
      </form>
    </section>
    <ResetPassword ref={passwordResetRef} />
</>
  );
};
export default Login;
