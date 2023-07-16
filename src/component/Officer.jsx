const Officer = () => {
  return (
    <section className={"h-screen text-center pt-24 lg:pt-16"}>

      <article className={"lg:border lg:rounded lg:shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] lg:w-7/12 lg:mx-auto lg:py-16"}>
        <div>
          <h1 className={"text-4xl lg:text-6xl text-white font-semibold shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"}>SpeedApp</h1>
          <p className={"text-2xl lg:text-4xl pt-10 text-white font-semibold shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"}>Officer ID</p>
        </div>
        <input
          type="text"
          className={"outline-none bg-[#2E3D72] py-1 px-6 mt-10 shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"}
        />
        <div className={"mt-8"}>
          <button className={"outline-none bg-[#2E3D72] text-2xl px-8 text-white py-1"}>Next</button>
        </div>
      </article>
    </section>
  )
}
export default Officer