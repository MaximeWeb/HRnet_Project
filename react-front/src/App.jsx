import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Current from "../pages/current";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
           <Route path="/current" element={<Current />} />
        </Route>
      </Routes>
    </Router>
  );
}
