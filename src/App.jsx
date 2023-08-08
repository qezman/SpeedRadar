// import backImg from "./images/img.png"
// import Officer from "./component/Officer";
// import Password from "./component/Password";
// import ChangePassword from "./component/ChangePassword";
// import Details from "./component/Details";
// import SpeedViolation from "./component/SpeedViolation";
import Reports from "./component/Reports";

const App = () => {
  return (
    <section className={"bg-[url('images/img.png')]"}>
      <div className="text-center pt-5 text-3xl text-white font-semibold uppercase">Terrestrial Speed Radar Logs</div>
      {/*<Officer />*/}
      {/* <Password /> */}
      {/* <ChangePassword /> */}
      {/*<Details />*/}
      {/*<SpeedViolation />*/}
      <Reports />
    </section>
  )
}
export default App