import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Componants/Contex/AuthContext ";
import Routing from "./Componants/Routes/Router";

const App = () => {
  return (
    <>
      <ToastContainer autoClose={5000} position="top-right" />
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </>
  );
};

export default App;
