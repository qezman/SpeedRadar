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
  {id: 1, name: "15th December 2018"},
  {id: 2, name: "23rd November 2020"},
  {id: 3, name: "13th July 2021"},
  {id: 4, name: "20th April 2023"},
]

export default details