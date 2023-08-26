import React from 'react';
import { FaUser } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import speedGun from "../images/speed_gun.png";
import { HiBars3 } from "react-icons/hi2";

import { getData } from "../firebase/database";

const Reports = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);  
  const [speeds, setSpeeds] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const searchedSpeeds = React.useMemo(() => {
    if (search) {
      const newSpeeds =  speeds.filter(speed => {
        if (speed.id.toString().includes(search)) return true;
        if (speed.speed.toString().includes(search)) return true;
        if (speed.date.toString().includes(search)) return true;
        if (speed.time.toString().includes(search)) return true;
        return false;
      })
      return newSpeeds
    }
    return speeds
  }, [search, speeds])

  React.useEffect(() => {
    getData({
      onSuccess(data) {
        setSpeeds(data);
        setLoading(false)
      },
      onError(error) {
        setError(error)
        setLoading(false)
      }
    })
  }, [])

  return (
    <section className={"h-full text-center pt-0 lg:pt-10"}>
      <article className={"lg:py-16"}>

          {error && (
            <div className='block'>{error.message}</div>
          )}

        {/*Speed Gun*/}
        <section className={"mt-10 px-3 text-sm md:text-lg md:flex"}>
          <div className={"hidden md:flex md:flex-col md:items-start"}>
            <p
              className={
                "font-bold text-3xl text-[#262A53] shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
              }
            >
              SpeedApp
            </p>
            <img src={speedGun} className={"mt-2 w-3/12 md:w-5/12"} alt="" />
          </div>

          {/*Speed Violation Container*/}
          <section
            className={
              "opacity-80 rounded-lg bg-[#312C6C] text-white flex flex-col md:w-full"
            }
          >
            <article className={"px-4 flex justify-between gap-x-4 py-2"}>
              <div className={"flex items-center gap-x-2"}>
                {/* <HiBars3 /> */}
                <p className='text-xl shadow-xl font-semibold'>Speed Violation </p>
              </div>

               {/*Search*/}
            

              <div className={"flex justify-center items-center gap-x-3"}>
                <p className='font-semibold'> Number of Vehicles </p>
                <button className={"px-2 rounded-2xl bg-[#1E284C]"}> {loading ? '---' : searchedSpeeds.length}</button>
              </div>

              <section
              className={"px-4 text-lg"}
            >
              <div className={"opacity-70 md:w-[80%]"}>
                <input
                  className={
                    "p-1.5 bg-[#1E284C] text-start rounded-lg shadow-2xl"
                  }
                 placeholder={"Search..."}
                  type={"search"}
                  onChange={({ target: { value }}) => setSearch(value)}
                  value={search}
                />
              </div>
            </section>
            </article>

           

            <hr className={"mt-3 border-1 border-gray-700"} />

            {loading ? (
              <h1 className="text-center text-xl text-gray-100">Loading...</h1>
            ) : <table className="border-separate border-spacing-2 border border-slate-500 ...">
              <thead>
              <tr>
                <th className="border border-slate-600 ">S/N</th>
                <th className="border border-slate-600 ">ID</th>
                <th className="border border-slate-600 ">SPEED</th>
                <th className="border border-slate-600 ">DATE</th>
                <th className="border border-slate-600 ">Time</th>
              </tr>
              </thead>
              <tbody>
                  {searchedSpeeds.map((speed, index) => (
                    <tr key={index}>
                      <td className='border border-slate-600'>{index + 1}</td>
                      <td className='border border-slate-600'>{speed.id}</td>
                      <td className='border border-slate-600'>{speed.speed}
                      {/* {speed.length ? 60 (<p className='text-green-500'>{speed.speed}</p>) : (<p className='text-red-500'>{speed.speed}</p>)} */}

                      </td>
                      <td className='border border-slate-600'>{speed.date}</td>
                      <td className='border border-slate-600'>{speed.time}</td>
                    </tr>
                  ))}
              </tbody>

            </table>}


          </section>
        </section>
      </article>
    </section>
  );
};
export default Reports;
