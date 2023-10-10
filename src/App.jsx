import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';

import SpeedViolation from "./component/SpeedViolation";
import AuthLayout from "./layout/auth";

import 'react-toastify/dist/ReactToastify.css';

// Create a client
const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>

    <section className={"h-full min-h-[100vh] bg-[url('images/darkBg.png')]"}>
      <div className="text-center pt-5 text-normal lg:text-3xl text-white font-semibold uppercase">
        Terrestrial Speed Radar
      </div>
      <div className="text-center pt-5 text-sm lg:text-2xl text-white font-semibold uppercase">
        Speed Violators Log
      </div>
      <AuthLayout>
        <SpeedViolation />
      </AuthLayout>
      <ToastContainer />
    </section>
    </QueryClientProvider>
  );
};
export default App;
