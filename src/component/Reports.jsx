import { FaUser } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import speedGun from "../images/speed_gun.png";
import { HiBars3 } from "react-icons/hi2";
import { reports } from "../data";

const Reports = () => {
  return (
    <section className={"h-full text-center pt-20 lg:pt-10"}>
      <article className={"lg:py-16"}>
        <div
          className={
            "text-sm md:text-lg py-1 px-3 flex justify-between bg-[#312C6C] text-white"
          }
        >
          <p> Administrator Board </p>
          <div className={"flex justify-center items-center gap-x-1"}>
            <FaUser />
            <p> John Doe </p> <RxTriangleDown />
          </div>
        </div>

        {/*Speed Gun*/}
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

          {/*vehicle Details Container*/}
          <section
            className={
              "opacity-80 rounded-lg bg-[#312C6C] text-white flex flex-col md:w-full"
            }
          >
            <article className={"px-4 flex justify-between gap-x-4 py-2"}>
              <div className={"flex items-center gap-x-2"}>
                <HiBars3 />
                <p> Speed Violation </p>
              </div>

              <div className={"flex justify-center items-center gap-x-3"}>
                <p> Number of Vehicles </p>
                <button className={"px-2 rounded-2xl bg-[#1E284C]"}> 2</button>
              </div>
            </article>

            {/*Search, Price list, Generate New*/}
            <section
              className={"px-4 flex items-center justify-between text-xs"}
            >
              <div className={"opacity-70 md:w-[30%]"}>
                <input
                  className={
                    "w-9/12 md:w-full p-1.5 bg-[#1E284C] text-start rounded-lg shadow-2xl"
                  }
                  value={"Search"}
                />
              </div>



            </section>

            <hr className={"mt-3 border-1 border-gray-700"} />

            <table className="border-separate border-spacing-2 border border-slate-500 ...">
              <thead>
              <tr>
                <th className="border border-slate-600 ...">State</th>
                <th className="border border-slate-600 ...">City</th>
                <th className="border border-slate-600 ...">City</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="border border-slate-700 ...">Indiana</td>
                <td className="border border-slate-700 ...">Indianapolis</td>
                <td className="border border-slate-700 ...">Metro</td>
              </tr>
              <tr>
                <td className="border border-slate-700 ...">Ohio</td>
                <td className="border border-slate-700 ...">Columbus</td>
                <td className="border border-slate-700 ...">Otario</td>
              </tr>
              <tr>
                <td className="border border-slate-700 ...">Michigan</td>
                <td className="border border-slate-700 ...">Detroit</td>
                <td className="border border-slate-700 ...">NY</td>
              </tr>
              </tbody>

            </table>


          </section>
        </section>
      </article>
      {/*<article className={"px-4 my-3 flex justify-center flex-col md:flex-row md:gap-x-1 lg:w-full lg:gap-x-4"}>*/}{" "}
      {/*  {icons.map((item) => {*/}{" "}
      {/*    const {id, icon, rightArrow, name} = item;*/} {/*    return (*/}{" "}
      {/*      <div className={"flex justify-center my-2"}>*/}{" "}
      {/*        <button key={id} className={"bg-green-700 hover:bg-green-800  lg:text-xl flex items-center gap-x-5 py-2 rounded-lg px-3 lg:px-6 lg:py-3 text-white"}>*/}{" "}
      {/*          {icon}*/} {/*          <p>{name}</p>*/}{" "}
      {/*          <p className={"bg-gray-400 p-1 rounded-3xl"}>*/}{" "}
      {/*            <p className={"text-sm text-gray-600"}>{rightArrow}</p>*/}{" "}
      {/*          </p>*/} {/*        </button>*/} {/*      </div>*/}{" "}
      {/*    )*/} {/*  })}*/} {/*</article>*/}{" "}
      {/*<article className={"flex justify-between text-white px-4 md:text-lg py-4"}>*/}{" "}
      {/*  <button className={"gap-x-3 p-1 border flex items-center"}>*/}{" "}
      {/*    <FaAngleLeft />*/} {/*    Previous*/} {/*  </button>*/}{" "}
      {/*</article>*/}{" "}
    </section>
  );
};
export default Reports;
