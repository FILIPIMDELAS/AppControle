import { Route, Routes } from 'react-router-dom'
import Service from './Pages/Cadastro/Services/Services'
import Work from './Pages/Cadastro/Work/Work'
import User from './Pages/Cadastro/User/User'
import Supplier from './Pages/Cadastro/Supplier/Supplier'

export default function RoutesApp() {
    const BackdropAction = ({ children }) => {
      return children;
    };
  
    return (
      <BackdropAction>
        <Routes>
          <Route exact path='/Service' element={<Service />} />
          <Route exact path='/Work' element={<Work />} />
          <Route exact path='/User' element={<User />} />
          <Route exact path='/Supplier' element={<Supplier />} />
          <Route exact path='/' element={<Service />} />
        </Routes>
      </BackdropAction>
    );
  }

  
  //<Route exact path='*' element={<Error />} />