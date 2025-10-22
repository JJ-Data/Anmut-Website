import { Route, Routes } from "react-router-dom";

import { About, Contact, Home, NotFound, Services, TeamPage } from "./routes";
// import ErrorPage from "./error-page";
import { Footer, NavBar } from "./components";

function App() {
  return (
    <div className="relative">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team-member" element={<TeamPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
