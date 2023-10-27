import { useQuery } from "@tanstack/react-query";
import React from "react";

import ChangePassword from '../component/ChangePassword';
import ImageContainer from "./ImageContainer";
import LogoutButton from "../component/LogoutButton";

const SpeedViolation = () => {
  const [search, setSearch] = React.useState("");
  const [image, setImage] = React.useState("");

  const { data, isLoading: loading, error } = useQuery({ 
    queryKey: ['speeds'], 
    queryFn: () => fetch('https://project-ip-cam.fly.dev/upload').then(res => res.json()),
    refetchInterval: 2500,
  })

  const speeds = React.useMemo(() => {
    if (data && data.data && data.data.length > 0) {
      return data.data.map((item) => ({
        ...item,
        datePath: item.updatedAt,
        timestamp: item.time,
        speed: item.speed,
        image: item.imageUrl,
      }))
    }
    return []
  }, [data])

  const changePasswordRef = React.useRef();
  const imageRef = React.useRef();

  const searchedSpeeds = React.useMemo(() => {
    if (search) {
      const newSpeeds = speeds.filter((speed) => {
        // if (speed.id.toString().includes(search)) return true;
        if (speed.speed.toString().includes(search)) return true;
        if (speed.datePath.toString().includes(search)) return true;
        if (speed.timestamp.toString().includes(search)) return true;
        return false;
      });
      return newSpeeds;
    }
    return speeds;
  }, [search, speeds]);

  return (
    <section className="text-white w-full pb-8 pt-4 mt-4">
      <ChangePassword />
      {error && <div className="block">{error.message}</div>}
      <article className="md:flex md:justify-between gap-x-4 items-center px-4 md:px-10">
        <div className="flex items-center gap-x-1 md:gap-x-3">
          <p className="text-xs md:text-lg">Number of Vehicles</p>
          <p className="px-2 rounded-2xl text-black bg-[#D9D9D9;]">
            {" "}
            {loading ? "---" : searchedSpeeds.length}
          </p>
        </div>
        <div className={""}>
          <input
            className={
              "my-2 p-1.5 text-start rounded-lg shadow-2xl bg-black opacity-25 text-white border border-white"
            }
            placeholder={"Search..."}
            type={"search"}
            onChange={({ target: { value } }) => setSearch(value)}
            value={search}
          />
        </div>
        <div className="">
          <button 
          className="p-1 md:px-6 md:py-3 rounded-md cursor-pointer transform transition active:scale-95 duration-300 bg-[#1E282D] hover:animate-pulse"
          onClick={() => {
            if (changePasswordRef.current) {
              changePasswordRef.current.open()
            }
          }}>
            Change Password
          </button>
        </div>
        <div className="mt-2">
          <LogoutButton />
        </div>
      </article>

      {loading ? (
        <div className="flex flex-col justify-center h-full items-center min-h-[50vh] w-full py-4">
            <div className="animate-spin h-8 w-8 rounded-full bg-transparent border-t-2 border-b-2  border-white" />
            <p className="animate-pulse my-3 text-center text-gray-100">Fetching Speed Data...</p>
        </div>
      ) : (
        <section className="px-10">
          <div className="flex flex-col mt-4 pt-8 pb-10">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-hidden max-h-[30rem] rounded-lg">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="bg-[#3B4953] font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          S/N
                        </th>
                        {/* <th scope="col" className="px-6 py-4">
                          ID
                        </th> */}
                        <th scope="col" className="px-6 py-4">
                          Speed
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Time
                        </th>
                        <th scope="col" className="px-6 py-4">Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchedSpeeds.map((speed, index) => {
                        let className = " ";
                        if (index % 2 === 0) className += "";
                        else className += "bg-[#3B4953]";

                        const date = new Date(speed.datePath);                        
                        return (
                          <tr className={className} key={index}>
                            <td className="whitespace-nowrap px-6 py-4">{index + 1}</td>
                            {/* <td className="whitespace-nowrap px-6 py-4">{speed.id}</td> */}
                            <td className="whitespace-nowrap px-6 py-4">{speed.speed}</td>
                            <td className="whitespace-nowrap px-6 py-4">{date.toDateString()}</td>
                            <td className="whitespace-nowrap px-6 py-4">{speed.timestamp}</td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <button onClick={() => {
                                setImage(speed.image)
                                if (imageRef) {
                                  imageRef.current.open();
                                }
                              }} className="bg-[#1E282D] hover:bg-gray-500 text-gray-100 border-none cursor-pointer rounded-md px-4 py-4">View Image</button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          
          <ChangePassword ref={changePasswordRef} />
          <ImageContainer ref={imageRef} image={image} />
        </section>
      )}
    </section>
  );
};
export default SpeedViolation;

// // import { reports } from "../data";
// import React from "react";
// import { toast } from "react-toastify";

// import ChangePassword from '../component/ChangePassword';
// import LogoutButton from "../component/LogoutButton";
// import { getData } from "../firebase/database";

// const SpeedViolation = () => {
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState(null);
//   const [speeds, setSpeeds] = React.useState([]);
//   const [search, setSearch] = React.useState("");

//   const changePasswordRef = React.useRef();

//   const searchedSpeeds = React.useMemo(() => {
//     if (search) {
//       const newSpeeds = speeds.filter((speed) => {
//         // if (speed.id.toString().includes(search)) return true;
//         if (speed.speed.toString().includes(search)) return true;
//         if (speed.datePath.toString().includes(search)) return true;
//         if (speed.timestamp.toString().includes(search)) return true;
//         return false;
//       });
//       return newSpeeds;
//     }
//     return speeds;
//   }, [search, speeds]);

//   React.useEffect(() => {
//     getData({
//       onSuccess(data) {
//         setSpeeds(data);
//         setLoading(false);
//       },
//       onError(error) {
//         toast.error(error.message)
//         setError(error);
//         setLoading(false);
//       },
//     });
//   }, []);

//   return (
//     <section className="text-white w-full pb-8 pt-4 mt-4">
//       <ChangePassword />
//       {error && <div className="block">{error.message}</div>}
//       <article className="md:flex md:justify-between gap-x-4 items-center px-4 md:px-10">
//         <div className="flex items-center gap-x-1 md:gap-x-3">
//           <p className="text-xs md:text-lg">Number of Vehicles</p>
//           <p className="px-2 rounded-2xl text-black bg-[#D9D9D9;]">
//             {" "}
//             {loading ? "---" : searchedSpeeds.length}
//           </p>
//         </div>
//         <div className={""}>
//           <input
//             className={
//               "my-2 p-1.5 text-start rounded-lg shadow-2xl bg-black opacity-25 text-white border border-white"
//             }
//             placeholder={"Search..."}
//             type={"search"}
//             onChange={({ target: { value } }) => setSearch(value)}
//             value={search}
//           />
//         </div>
//         <div className="">
//           <button 
//           className="p-1 md:px-6 md:py-3 rounded-md cursor-pointer transform transition active:scale-95 duration-300 bg-[#1E282D] hover:animate-pulse"
//           onClick={() => {
//             if (changePasswordRef.current) {
//               changePasswordRef.current.open()
//             }
//           }}>
//             Change Password
//           </button>
//         </div>
//         <div className="mt-2">
//           <LogoutButton />
//         </div>
//       </article>

//       {loading ? (
//         <div className="flex flex-col justify-center h-full items-center min-h-[50vh] w-full py-4">
//             <div className="animate-spin h-8 w-8 rounded-full bg-transparent border-t-2 border-b-2  border-white" />
//             <p className="animate-pulse my-3 text-center text-gray-100">Fetching Speed Data...</p>
//         </div>
//       ) : (
//         <section className="px-10">
//           <div className="flex flex-col mt-4 pt-8 pb-10">
//             <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
//               <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
//                 <div className="overflow-x-hidden max-h-[30rem] rounded-lg">
//                   <table className="min-w-full text-left text-sm font-light">
//                     <thead className="bg-[#3B4953] font-medium dark:border-neutral-500">
//                       <tr>
//                         <th scope="col" className="px-6 py-4">
//                           S/N
//                         </th>
//                         {/* <th scope="col" className="px-6 py-4">
//                           ID
//                         </th> */}
//                         <th scope="col" className="px-6 py-4">
//                           Speed
//                         </th>
//                         <th scope="col" className="px-6 py-4">
//                           Date
//                         </th>
//                         <th scope="col" className="px-6 py-4">
//                           Time
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {searchedSpeeds.map((speed, index) => {
//                         let className = " ";
//                         if (index % 2 === 0) className += "";
//                         else className += "bg-[#3B4953]";

//                         const date = new Date(speed.datePath);                        
//                         return (
//                           <tr className={className} key={index}>
//                             <td className="whitespace-nowrap px-6 py-4">{index + 1}</td>
//                             {/* <td className="whitespace-nowrap px-6 py-4">{speed.id}</td> */}
//                             <td className="whitespace-nowrap px-6 py-4">{speed.speed}</td>
//                             <td className="whitespace-nowrap px-6 py-4">{date.toDateString()}</td>
//                             <td className="whitespace-nowrap px-6 py-4">{speed.timestamp}</td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>

          
//           <ChangePassword ref={changePasswordRef} />

//           {/* <article className="border rounded-lg mt-4 h-full">
//             <div className="px-6 text-small lg:text-2xl font-bold flex justify-between items-center py-3">
//               <h3>S/N</h3>
//               <h3>ID</h3>
//               <h3>SPEED</h3>
//               <h3>DATE</h3>
//               <h3>TIME</h3>
//             </div>
//             <div className="">
//               {searchedSpeeds.map((speed, index) => {
//                 console.log(speed.speed);
//                 return (
//                   <div
//                     key={index}
//                     className="px-6 flex justify-between items-center text-xs lg:text-xl py-3"
//                   >
//                     <p>{index + 1}</p>
//                     <p>{speed.id}</p>
//                     <p>{speed.speed}</p>
//                     <p>{speed.date}</p>
//                     <p>{speed.time}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </article> */}
//         </section>
//       )}
//     </section>
//   );
// };
// export default SpeedViolation;