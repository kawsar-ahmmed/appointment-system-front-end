import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Header from './Page/Header/Header';
import Appointment from './Page/Appointment/Appointment';
import Footer from './Page/Header/Footer';
import Login from './Page/Login/Login/Login';
import Register from './Page/Login/Register/Register';
import RequireAuth from './Page/Login/Login/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
