import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./Pages/HomePage";
function App() {
   return (
      <>
         <CssBaseline />
            <Router>
               <Navbar />
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/blogs" element={<>Blogs</>} />
                  <Route path="/subscription" element={<>subscription</>} />
                  <Route path="/dashboard" element={<>dashboard</>} />
                  <Route path="/profile" element={<>profile</>} />
                  <Route path="/*" element={<>Error 404</>} />
               </Routes>
            </Router>
      </>
   );
}

export default App;
