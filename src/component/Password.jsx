import React from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

import { resetPassword } from "../firebase/auth";

const ResetPassword = React.forwardRef((props, ref) => {
  const [email, setEmail] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useImperativeHandle(
    ref,
    () => ({
      open: () => setVisible(true),
      close: () => setVisible(false),
    }),
    []
  );

  const reset = React.useCallback(async (email) => {
    try {
      setLoading(true);
      await resetPassword(email);
      toast.success("Password reset email sent.");
      setVisible(false);
      setEmail("")
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleChange = React.useCallback(({ target: { value } }) => {
    setEmail(value)
  }, []);

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Email address is required.')
    } else {
      reset(email)
    }

  }, [email, reset])

  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.4)",
      }}
      className={`${
        visible ? "translate-y-0" : "-translate-y-full"
      } duration-500 transition transform fixed top-0 left-0 z-30 w-full`}
    >
      <section className={"h-screen text-center pt-20 lg:pt-10"}>
        <form
          onSubmit={handleSubmit}
          className={
            "bg-neutral-500 lg:border lg:rounded lg:shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] lg:w-7/12 lg:mx-auto lg:py-16"
          }
        >
          <div>
            <div className="flex justify-end pr-4 lg:pr-8">
              <span
                onClick={() => setVisible(false)}
                className="cursor-pointer  bg-neutral-400 rounded-full p-2 inline-flex justify-center items-center"
              >
                <FaTimes className="text-base" />
              </span>
            </div>
            <h1
              className={
                "text-4xl lg:text-6xl text-white font-semibold shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
              }
            >
              SpeedApp
            </h1>
            <p
              className={
                "text-2xl lg:text-4xl pt-10 text-white font-semibold shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
              }
            >
              Forgot Password?
            </p>
          </div>
          <article>
            <input
              type="text"
              className={
                "text-gray-500 outline-none bg-[#2E3D72] py-2 px-3 w-5/12 mx-auto mt-10 shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
              }
              name="email"
              onChange={handleChange}
              disabled={loading}
              placeholder="Enter email address"
              value={email}
            />
          </article>
          <div className={"mt-8"}>
            <button
              disabled={loading}
              className={
                "outline-none bg-[#2E3D72] text-2xl px-8 py-1 text-white"
              }
            >
              {loading ? "Submitting..." : "Reset"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
});

ResetPassword.displayName = "Reset Password";

export default ResetPassword;
