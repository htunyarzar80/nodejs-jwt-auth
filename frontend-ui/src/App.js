import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import UserRoute from "./components/UserRoute";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<UserRoute><Home /></UserRoute>} />
          <Route path="/" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
