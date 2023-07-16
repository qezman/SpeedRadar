const ChangePassword = () => {
  return (
    <section className={"h-screen text-center pt-20 lg:pt-10"}>

      <article className={"lg:border lg:rounded lg:shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] lg:w-7/12 lg:mx-auto lg:py-16"}>
        <div>
          <h1 className={"text-4xl lg:text-6xl text-white font-semibold shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"}>SpeedApp</h1>
          <p className={"text-2xl lg:text-4xl pt-10 text-white font-semibold shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"}>Change Password</p>
        </div>
        <article>
          <input
            type="text"
            className={"text-gray-500 outline-none bg-[#2E3D72] py-2 px-3 w-5/12 mx-auto mt-10 shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"}
            value={"New Password"}
          />
          <div>
            <input
              type="text"
              className={"text-gray-500 outline-none bg-[#2E3D72] py-2 px-3 w-5/12 mx-auto mt-10 shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"}
              value={"Confirm Password"}
            />
          </div>
        </article>
        <div className={"mt-8"}>
          <button className={"outline-none bg-[#2E3D72] text-2xl px-8 py-1 text-white"}>Confirm</button>
        </div>
      </article>
    </section>
  )
}
export default ChangePassword