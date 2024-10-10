import Checkout from "./Components/Checkout/Checkout";
import Earphones from "./Components/Earphones/earphones";
import Headphones from "./Components/Headphones/headphones";
import Home from "./Components/Home/Home";
import VMARK1 from "./Components/ProductMark1/VMark1";
import VMARK2 from "./Components/ProductMark2/VMark2";
import VXX59 from "./Components/ProductXX59/VXX59";
import VYX1 from "./Components/Productyx1/VYX1";
import VZX7 from "./Components/Productzx7/VZX7";
import VZX9 from "./Components/Productzx9/VZX9";

import Speakers from "./Components/Speakers/speakers";

import { DataProvider } from "./Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="headphones/mark2" element={<VMARK2 />} />
          <Route path="headphones/mark1" element={<VMARK1 />} />
          <Route path="headphones/xx59" element={<VXX59 />} />

          <Route path="speakers" element={<Speakers />} />
          <Route path="speakers/zx7" element={<VZX7 />} />
          <Route path="speakers/zx9" element={<VZX9 />} />
          <Route path="earphones" element={<Earphones />} />
          <Route path="earphones/yx1" element={<VYX1 />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
