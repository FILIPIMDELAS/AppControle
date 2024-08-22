import { Route, Routes } from 'react-router-dom'
import Service from './Pages/Register/Services/Services'
import NewRegSer from './Pages/Register/Services/NewRegSer'
import Work from './Pages/Register/Work/Work'
import NewRegWork from './Pages/Register/Work/NewRegWork'
import User from './Pages/Register/User/User'
import NewRegUser from './Pages/Register/User/NewRegUser'
import Supplier from './Pages/Register/Supplier/Supplier'
import NewRegSup from './Pages/Register/Supplier/NewRegSup'
import Home from './Pages/Home/Home'

export default function RoutesApp() {
    const BackdropAction = ({ children }) => {
      return children;
    };
  
    return (
      <BackdropAction>
        <Routes>
          <Route exact path='/Service' element={<Service />} />
          <Route exact path='/newregService' element={<NewRegSer />} />
          <Route exact path='/Work' element={<Work />} />
          <Route exact path='/newregWork' element={<NewRegWork />} />
          <Route exact path='/User' element={<User />} />
          <Route exact path='/newregUser' element={<NewRegUser />} />
          <Route exact path='/Supplier' element={<Supplier />} />
          <Route exact path='/newregSupplier' element={<NewRegSup />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/' element={<Service />} />
        </Routes>
      </BackdropAction>
    );
  }

  
  //<Route exact path='*' element={<Error />} />