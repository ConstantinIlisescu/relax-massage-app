import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Layout,
  Home,
  Services,
  AboutServices,
  AboutMe,
  Contact,
  NoPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="relax-massage-app" element={<Home />} />
          <Route path="relax-massage-app/services" element={<Services />} />
          <Route path="relax-massage-app/contact" element={<Contact />} />
          <Route
            path="relax-massage-app/about-services"
            element={<AboutServices />}
          />
          <Route path="relax-massage-app/about" element={<AboutMe />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
