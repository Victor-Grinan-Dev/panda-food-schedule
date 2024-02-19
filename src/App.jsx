import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/views/Home/Home";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
