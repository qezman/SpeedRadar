import {BsSpeedometer} from "react-icons/bs";
import {FaCar} from "react-icons/fa";
import {BiCurrentLocation} from "react-icons/bi";
import {GoReport} from "react-icons/go";
import {AiOutlineArrowRight} from "react-icons/ai";

const details = [
  {id: 1, content: "Driver's Name"},
  {id: 2, content: "Driver's National ID"},
  {id: 3, content: "Vehicle Registration"},
]

// export const buttons = [
//   {id: 1, name: "vehicle"},
//   {id: 2, name: "Speed Violations"},
//   {id: 3, name: "Speed Zones"},
//   {id: 4, name: "Report"},
// ]

export const icons = [
  {id: 1, name: "vehicle", icon: <FaCar />, rightArrow: <AiOutlineArrowRight />},
  {id: 2, name: "Speed Violations", icon: <BsSpeedometer />, rightArrow: <AiOutlineArrowRight />},
  {id: 3, name: "Speed Zones", icon: <BiCurrentLocation />, rightArrow: <AiOutlineArrowRight />},
  {id: 4, name: "Report", icon: <GoReport />, rightArrow: <AiOutlineArrowRight />},
]

export const violations = [
  {id: 1, name: "Vehicle Registration Number"},
  {id: 2, name: "Speed Recorded"},
  {id: 3, name: "Speed Limit"},
  {id: 4, name: "Speed Exceeded"},
  {id: 5, name: "Location"},
  {id: 6, name: "Date"},
  {id: 7, name: "Time"},
]

export const reports = [
  {id: 1, speed: 198},
  {id: 2, speed: 178},
  {id: 3, speed: 159},
  {id: 4, speed: 200},
]

export default details