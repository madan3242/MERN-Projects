import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Admin from './components/Products/Admin';
import CreateProduct from './components/Products/CreateProduct';
import UpdateProduct from './components/Products/UpdateProduct';

const App = () => {
  return (<>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create' element={<CreateProduct/>} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
        </Routes>
    </BrowserRouter>
  </>)
}

export default App