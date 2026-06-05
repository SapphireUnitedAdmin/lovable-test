import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import Values from "./pages/Values";
import Onboarding from "./pages/Onboarding";
import Sops from "./pages/Sops";
import Tools from "./pages/Tools";
import Contacts from "./pages/Contacts";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="values" element={<Values />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="sops" element={<Sops />} />
        <Route path="tools" element={<Tools />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
