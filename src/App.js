import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import ScrollToTop from "./Components/Partials/ScrollToTop";
import AnimatedRoutes from "./Routes"; // Your routes component
import ReturnToTopButton from "./Components/Partials/ReturnToTopButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <main>
      <AnimatedRoutes />
      <ReturnToTopButton />
    </main>
    <Footer />

   
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </Router>
);

export default App;
