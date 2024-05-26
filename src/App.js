import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './component/Home'
import {About} from './component/About'
import {Payment} from './component/Payment'
import {Contact} from './component/Contact'
import {Login} from './component/Login'
import {Bts} from './component/Bts'
import {Blackpinkk} from './component/Blackpinkk'
import {Ateez} from './component/Ateez'
import {Lesserafim} from './component/Lesserafim'
import {Seventeen} from './component/Seventeen'
import {Twice} from './component/Twice'
import {Sign} from './component/Sign'



function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='Home' element={<Home/>}></Route>
    <Route path='Contact' element={<Contact/>}></Route>
    <Route path='About' element={<About/>}></Route>
      <Route path='Payment' element={<Payment/>}></Route>
      <Route path='Login' element={<Login/>}></Route>
      <Route path='Sign' element={<Sign/>}></Route>
      <Route path='Bts' element={<Bts/>}></Route>
      <Route path='Blackpinkk' element={<Blackpinkk/>}></Route>
      <Route path='Ateez' element={<Ateez/>}></Route>
      <Route path='Lesserafim' element={<Lesserafim/>}></Route>
      <Route path='Seventeen' element={<Seventeen/>}></Route>
      <Route path='Twice' element={<Twice/>}></Route>



   </Routes>
   </BrowserRouter>
  );
}

export default App;
