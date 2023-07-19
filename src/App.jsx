import backImg from "./images/img.png"
import Officer from "./component/Officer";
import Password from "./component/Password";
import ChangePassword from "./component/ChangePassword";
import Details from "./component/Details";
import SpeedViolation from "./component/SpeedViolation";
import Reports from "./component/Reports";
const App = () => {
  return (
    <section className={"bg-[url('images/img.png')]"}>
      {/*<Officer />*/}
      <Password />
      <ChangePassword />
      {/*<Details />*/}
      {/*<SpeedViolation />*/}
      <Reports />
      {/*<h1>Hello</h1>*/}
    </section>
  )
}
export default App