import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
  FaUser,
} from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import speedGun from "../images/speed_gun.png";
import { HiBars3 } from "react-icons/hi2";
import { AiFillDelete } from "react-icons/ai";
import details, { icons, violations } from "../data";

const SpeedViolation = () => {
  return (
    <section className={"h-full text-center pt-20 lg:pt-10"}>
      <article className={"lg:py-16"}>
        <div
          className={
            "text-sm md:text-lg py-1 px-3 flex justify-between bg-[#312C6C] text-white "
          }
        >
          <p> Administrator Board </p>{" "}
          <div className={"flex justify-center items-center gap-x-1"}>
            <FaUser />
            <p> John Doe </p> <RxTriangleDown />
          </div>{" "}
        </div>
        {/*Speed Gun*/}{" "}
        <section className={"mt-10 px-3 text-sm md:text-lg md:flex"}>
          <div className={"hidden md:flex md:flex-col md:items-start"}>
            <p
              className={
                "font-bold text-lg text-[#262A53] shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
              }
            >
              {" "}
              SpeedApp{" "}
            </p>{" "}
            <img src={speedGun} className={"mt-2 w-3/12 md:w-5/12"} alt="" />
          </div>
          {/*vehicle Details Container*/}{" "}
          <section
            className={
              "opacity-80 rounded-lg bg-[#312C6C] text-white flex flex-col md:w-full"
            }
          >
            <article className={"px-4 flex justify-between gap-x-4 py-2"}>
              <div className={"flex items-center gap-x-2"}>
                <HiBars3 />
                <p> Speed Violations </p>{" "}
              </div>
              <div className={"flex justify-center items-center gap-x-3"}>
                <p> Number of Vehicles </p>{" "}
                <button className={"px-2 rounded-2xl bg-[#1E284C]"}> 2 </button>{" "}
              </div>{" "}
            </article>
            <hr className={"border-1 border-gray-700"} />
            <section className={"px-4 mt-4 flex justify-between items-center"}>
              <article>
                <button
                  className={
                    "flex justify-center items-center bg-[#C63333] px-2 py-1.5 gap-x-1 rounded md:p-1.5 shadow-2xl shadow-indigo-500/40"
                  }
                >
                  <AiFillDelete />
                  Delete{" "}
                </button>{" "}
              </article>
              <article className={"flex justify-center items-center gap-x-3"}>
                <p> Records per page </p>{" "}
                <div className={"flex justify-center items-center"}>
                  {" "}
                  <span className={"border border-r-0 rounded-l px-1"}>
                    {" "}
                    10{" "}
                  </span>{" "}
                  <button className={"bg-gray-500 p-1 md:p-1.5 rounded-r"}>
                    <FaAngleDown className={"text-gray-800"} />{" "}
                  </button>
                </div>
              </article>
              <article className={"md:w-3/12"}>
                <p
                  className={
                    "p-1.5 bg-[#1E284C] text-start rounded-lg shadow-2xl"
                  }
                >
                  {" "}
                  Search{" "}
                </p>{" "}
              </article>{" "}
            </section>
            <article
              className={
                "mx-4 my-3 rounded border border-gray-600 md:flex md:flex-wrap md:justify-between lg:flex lg:flex-nowrap"
              }
            >
              {" "}
              {violations.map((detail) => {
                const { id, name } = detail;
                return (
                  <table
                    key={id}
                    className="m-4 border-separate border-spacing-2 border border-slate-500 flex flex-col"
                  >
                    <thead
                      className={
                        "flex justify-between items-center p-2 md:gap-x-3 lg:text-xs"
                      }
                    >
                      <div> {name} </div>{" "}
                      <div>
                        <FaAngleUp />
                        <FaAngleDown />
                      </div>{" "}
                    </thead>{" "}
                  </table>
                );
              })}
            </article>
            <article className={"py-3 md:flex md:justify-between md:px-4"}>
              <p> No Data in Table </p> <p> Showing 0 to 0 of 0 entries </p>{" "}
            </article>{" "}
          </section>
        </section>
      </article>
      <article
        className={
          "px-4 my-3 flex justify-center flex-col md:flex-row md:gap-x-1 lg:w-full lg:gap-x-4"
        }
      >
        {" "}
        {icons.map((item) => {
          const { id, icon, rightArrow, name } = item;
          return (
            <div className={"flex justify-center my-2"}>
              <button
                key={id}
                className={
                  "bg-green-700 hover:bg-green-800  lg:text-xl flex items-center gap-x-5 py-2 rounded-lg px-3 lg:px-6 lg:py-3 text-white"
                }
              >
                {" "}
                {icon} <p> {name} </p>{" "}
                <p className={"bg-gray-400 p-1 rounded-3xl"}>
                  <p className={"text-sm text-gray-600"}> {rightArrow} </p>{" "}
                </p>{" "}
              </button>{" "}
            </div>
          );
        })}{" "}
      </article>{" "}
      <article
        className={"flex justify-between text-white px-4 md:text-lg py-4"}
      >
        <button className={"gap-x-3 p-1 border flex items-center"}>
          <FaAngleLeft />
          Previous{" "}
        </button>{" "}
        <button className={"gap-x-3 p-1 border flex items-center"}>
          Next <FaAngleRight />
        </button>{" "}
      </article>{" "}
    </section>
  );
};
export default SpeedViolation;
