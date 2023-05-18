import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { TopNav } from './layouts/dashboard/top-nav';
import Header from './components/Header';
import { SideNav } from './layouts/dashboard/side-nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { routes } from './contexts/routes';
import React  from 'react';

const PrivateRoute = ({ element }) => {
  const token = sessionStorage.getItem("token");

  return token ? element : <Navigate to="/signin" />;
};


function App() {
  const dispatch = useDispatch();
  // const { setUser } = authenSlice.actions;
  // let token = useSelector((state) => state.authen.token);
  // let user = null;
  // if (token === null) {
  //   token = sessionStorage.getItem("token");
  //   if (token) {
  //     user = decryptToken(token);
  //     dispatch(setUser(user));
  //   }
  // } else {
  //   user = decryptToken(token);
  //   dispatch(setUser(user));
  // }

  const [role, setRole] = React.useState("admin");

  // const [isRefresh, setIsRefresh] = React.useState(false);

  const renderRoute = () => {
    return routes.map((route) => {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.component
          }
          exact={route.exact}
        />
      );
    });
  };

  // console.log("render");

  // React.useEffect(() => {
  //   setIsRefresh(true);
  // }, [token]);


  return (
    <>
      <Router>
       <div>
       {role == "admin"? <TopNav /> : <Header />} 
         {role == "admin"? <SideNav /> : <></>} 
          
         <Routes>{renderRoute()}</Routes>
          {role != "admin"? <Footer /> : <></>} 
          <ScrollToTop /> 
      
       </div>
      </Router>
    </>
  );
}

export default App;
