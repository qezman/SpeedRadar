import { reports } from "../data"
import React from 'react';

import { getData } from "../firebase/database";

const SpeedViolation = () => {
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
        <section className="text-white w-full">
            
          {error && (
            <div className='block'>{error.message}</div>
          )}
            <article className="flex justify-between gap-x-4 items-center px-4 md:px-10">
            <div className="flex items-center gap-x-1 md:gap-x-3">
                <p className="text-xs md:text-lg">Number of Vehicles</p>
                <p className="px-2 rounded-2xl text-black bg-[#D9D9D9;]"> {loading ? '---' : searchedSpeeds.length}</p>
            </div>
            <div className={""}>
                <input
                  className={
                    "p-1.5 text-start rounded-lg shadow-2xl bg-black opacity-25 text-white border border-white"
                  }
                 placeholder={"Search..."}
                  type={"search"}   
                  onChange={({ target: { value }}) => setSearch(value)}
                  value={search}
                />
              </div>
            </article>

            {
                loading ? (
                    <h1 className="text-center text-xl text-gray-100">Loading...</h1>
                ) : <section className="px-10">
                <article className="border rounded-lg mt-4 h-full">
                    <div className="px-6 text-small lg:text-2xl font-bold flex justify-between items-center py-3">
                        <h3>S/N</h3>
                        <h3>ID</h3>
                        <h3>SPEED</h3>
                        <h3>DATE</h3>
                        <h3>TIME</h3>
                    </div>
                    <div className="">
                        {searchedSpeeds.map((speed, index) => {
                            return (
                                <div key={index} className="px-6 flex justify-between items-center text-xs lg:text-xl py-3">
                                  {/* <h3></h3> */}
                                    <p>{index+1}</p>
                                    <p>{speed.id}</p>
                                    <p>{speed.speed}</p>
                                    <p>{speed.date}</p>
                                    <p>{speed.time}</p>
                                </div>
                            )
                        })}
                    </div>
                </article> 
                </section>
            }
        </section>
    )
}
export default SpeedViolation