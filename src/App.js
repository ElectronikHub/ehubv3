import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import ScrollToTop from "./Components/Partials/ScrollToTop"; // Adjust if needed
import AnimatedRoutes from "./Routes"; // This should match your routes.jsx file
import ReturnToTopButton from "./Components/Partials/ReturnToTopButton";


const App = () => (
 <Router>
      <ScrollToTop />
      <Header />
      <main>
        <AnimatedRoutes />
              <ReturnToTopButton />

      </main>
      <Footer />
    </Router>
);

export default App;
