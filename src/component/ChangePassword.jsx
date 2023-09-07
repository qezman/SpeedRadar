import React from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

import { changePassword as updatePassword } from "../firebase/auth";

const ChangePassword = React.forwardRef((props, ref) => {
  const [form, setForm] = React.useState({
    password1: "",
    password2: "",
  });
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

  const changePassword = React.useCallback(async (password) => {
    try {
      setLoading(true);
      await updatePassword(password);
      toast.success("Password change successfully.");
      setVisible(false);
      setForm({
        password1: '',
        password2: ''
      })
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleChange = React.useCallback(({ target: { name, value } }) => {
    setForm((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  }, []);

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();

    if (!form.password1) {
      toast.error('New password field is required.')
    } else if (!form.password2) {
      toast.error('Password confirmation field is required.')
    } else if (form.password1 !== form.password2) {
      toast.error('Password fields do not match.')
    } else {
      changePassword(form.password1)
    }

  }, [form, changePassword])

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
              Change Password
            </p>
          </div>
          <article>
            <input
              type="password"
              className={
                "text-gray-500 outline-none bg-[#2E3D72] py-2 px-3 w-5/12 mx-auto mt-10 shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
              }
              name="password1"
              onChange={handleChange}
              disabled={loading}
              placeholder="Enter new password"
              value={form.password1}
            />
            <div>
              <input
                type="password"
                className={
                  "text-gray-500 outline-none bg-[#2E3D72] py-2 px-3 w-5/12 mx-auto mt-10 shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
                }
                name="password2"
                onChange={handleChange}
                disabled={loading}
                placeholder="Confirm New Password"
                value={form.password2}
              />
            </div>
          </article>
          <div className={"mt-8"}>
            <button
              disabled={loading}
              className={
                "outline-none bg-[#2E3D72] text-2xl px-8 py-1 text-white"
              }
            >
              {loading ? "Submitting..." : "Confirm"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
});

ChangePassword.displayName = "Change Password";

export default ChangePassword;
