import { ToastContainer } from 'react-toastify';
// import backImg from "./images/img.png"
// import Officer from "./component/Officer";
import Password from "./component/Password";
// import ChangePassword from "./component/ChangePassword";
// import Details from "./component/Details";
import SpeedViolation from "./component/SpeedViolation";
import Reports from "./component/Reports";
import Details from "./component/Details";

import AuthLayout from "./layout/auth";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    // <section className={"h-full bg-[url('images/img.png')]"}>
    <section className={"h-full min-h-[100vh] bg-[url('images/darkBg.png')]"}>
      <div className="text-center pt-5 text-normal lg:text-3xl text-white font-semibold uppercase">
        Terrestrial Speed Radar
      </div>
      <div className="text-center pt-5 text-sm lg:text-2xl text-white font-semibold uppercase">
        Speed Violators Log
      </div>
      {/*<Officer />*/}
      {/* <Password /> */}
      {/* <ChangePassword /> */}
      {/*<Details />*/}
      <AuthLayout>
        <SpeedViolation />
      </AuthLayout>
      {/* <Reports /> */}
      {/* <Details /> */}
      <ToastContainer />
    </section>
  );
};
export default App;
