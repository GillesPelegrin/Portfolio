import Navbar from "./component/navbar/navbar";
import Body from "./component/body/body";
import { ToastProvider } from "./component/toast/toast-provider";
import ToastContainer from "./component/toast/toast-container";

function App() {
  return (
    <div className="h-screen">
      <ToastProvider>
        <Navbar></Navbar>
        <Body></Body>
        <ToastContainer />
      </ToastProvider>
    </div>
  );
}

export default App;
