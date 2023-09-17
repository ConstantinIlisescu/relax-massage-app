import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "./images";
import {} from "./components";
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
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about-services" element={<AboutServices />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
