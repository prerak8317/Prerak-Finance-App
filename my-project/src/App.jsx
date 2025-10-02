import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Blogs from "./component/pages/Blogs";
import FixedDepositComparison from "./component/pages/FixedDepositComparison";
import Guides from "./component/pages/Guides";
import Home from "./component/pages/Home";
import LoansComparision from "./component/pages/LoansComparision";
import SavingComparison from "./component/pages/SavingComparison";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/SavingComparison" element={<SavingComparison />} />
          <Route
            path="/FixedDepositComparison"
            element={<FixedDepositComparison />}
          />
          <Route path="/LoansComparision" element={<LoansComparision />} />
          <Route path="/Guides" element={<Guides />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Home />
    </>
  );
}

export default App;
