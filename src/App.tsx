import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Image from "./components/Image";
import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";
import About from "./components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="image" element={<Image />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
