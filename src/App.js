import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cantact from "./component/Cantact";
import Yonalishlar from "./component/Yonalishlar";
import News from "./component/News";
import Others from "./Others";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Yonalishlar />
        <Routes>
          <Route path="contact" element={<Cantact />} />
          <Route path="qiziqish" element={<News />} />
          <Route path="others" element={<Others />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
{/* <BrowserRouter>
      <Navlink2 />

        <Routes>
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Cantact />} />
        </Routes>
      </BrowserRouter> */}

// <Route path="blogs" element={<Blogs />} />
