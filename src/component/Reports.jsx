import {FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaUser} from "react-icons/fa";
import {RxTriangleDown} from "react-icons/rx";
import speedGun from "../images/speed_gun.png";
import {HiBars3} from "react-icons/hi2";
import {AiFillDelete} from "react-icons/ai";
import {icons, reports, violations} from "../data";

const Reports = () => {
  return (
    <section className={"h-full text-center pt-20 lg:pt-10"}>

      <article className={"lg:py-16"}>
        <div className={"text-sm md:text-lg py-1 px-3 flex justify-between bg-[#312C6C] text-white"}>
          <p>Administrator Board</p>
          <div className={"flex justify-center items-center gap-x-1"}>
            <FaUser />
            <p>John Doe</p>
            <RxTriangleDown />
          </div>
        </div>

        {/*Speed Gun*/}
        <section className={"mt-10 px-3 text-sm md:text-lg md:flex"}>
          <div className={"hidden md:flex md:flex-col md:items-start"}>
            <p className={"font-bold text-lg text-[#262A53] shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"}>SpeedApp</p>
            <img src={speedGun} className={"mt-2 w-3/12 md:w-5/12"} alt=""/>
          </div>

          {/*vehicle Details Container*/}
          <section className={"opacity-80 rounded-lg bg-[#312C6C] text-white flex flex-col md:w-full"}>
            <article className={"px-4 flex justify-between gap-x-4 py-2"}>
              <div className={"flex items-center gap-x-2"}>
                <HiBars3 />
                <p>Reports</p>
              </div>

              <div className={"flex justify-center items-center gap-x-3"}>
                <p>Number of Vehicles</p>
                <button className={"px-2 rounded-2xl bg-[#1E284C]"}>2</button>
              </div>
            </article>

            {/*Search, Price list, Generate New*/}
            <section className={"px-4 flex items-center justify-between text-xs"}>
              <div className={"opacity-70 md:w-[30%]"}>
                <input
                  className={"w-9/12 md:w-full p-1.5 bg-[#1E284C] text-start rounded-lg shadow-2xl"}
                  value={"Search"}
                />
              </div>
              <article className={"flex items-center gap-x-10"}>
                <div className={"opacity-70 md:w-[50%]"}>
                  <input
                    className={"p-1.5 w-8/12 bg-[#1E284C] text-start rounded-lg shadow-2xl"}
                    value={"Price List"}
                  />
                </div>
                <div className={""}>
                  <p className={"bg-green-700 p-1 md:p-2 bg-[#1E284C] rounded-lg shadow-2xl"}>Generate Now</p>
                </div>
              </article>
            </section>

            <hr className={"mt-3 border-1 border-gray-700"}/>


            <article className={"p-4 flex flex-col items-start"}>
              {reports.map((detail) => {
                const {id, name} = detail
                return (
                  <section key={id}>
                    <p>{name}</p>
                  </section>
                )
              })}

            </article>

          </section>

        </section>

      </article>

      <article className={"px-4 my-3 flex justify-center flex-col md:flex-row md:gap-x-1 lg:w-full lg:gap-x-4"}>
        {icons.map((item) => {
          const {id, icon, rightArrow, name} = item;
          return (
            <div className={"flex justify-center my-2"}>
              <button key={id} className={"bg-green-700 hover:bg-green-800  lg:text-xl flex items-center gap-x-5 py-2 rounded-lg px-3 lg:px-6 lg:py-3 text-white"}>
                {icon}
                <p>{name}</p>
                <p className={"bg-gray-400 p-1 rounded-3xl"}>
                  <p className={"text-sm text-gray-600"}>{rightArrow}</p>
                </p>
              </button>
            </div>
          )
        })}
      </article>
      <article className={"flex justify-between text-white px-4 md:text-lg py-4"}>
        <button className={"gap-x-3 p-1 border flex items-center"}>
          <FaAngleLeft />
          Previous
        </button>
      </article>
    </section>

  )
}
export default Reports