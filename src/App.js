import Home from "./pages/Home";
import Header from "./components/header";
import Footer from "./components/footer";
import {Routes, Route} from 'react-router-dom';
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Privacypolicy from "./pages/Privacypolicy";
import Termsconditions from "./pages/Termsconditions";
import Iot from "./pages/Iot";
import Robotics from "./pages/Robotics";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
       <Route path="/"  element={<Home/>} />
     <Route path="/aboutus" element={<Aboutus/>} />
       <Route path="/blog" element={<Blog/>} />
       <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/iot" element={<Iot/>}/>
      <Route path="/privacypolicy" element={<Privacypolicy/>}/>
      <Route path="/termsconditions" element={<Termsconditions/>}/> 
      <Route path="/robotics" element={<Robotics/>}/>
      </Routes>
      <Footer/>


    </div>
  );
}

export default App;
