import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoutes";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div className="App">
      <Navbar>
        <Routes>
          {/* <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route> */}
          {
            publicRoute.map(({path,Component}) =><Route path={path} element={<Component></Component>}></Route>)
          }
       </Routes>
     </Navbar>
    </div>
  );
}

export default App;
