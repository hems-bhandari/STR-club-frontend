import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import Home from '../Home/Home';
import EventPage from '../EventPage/EventPage';
import Footer from '../../components/footer/Footer';
import { BrowserRouter, Switch, Route,Routes} from 'react-router-dom';
import Posts from '../Posts/Posts';
import ScrollToTop from '../../components/scrollToTop';


const Layout = () => {


    return(
        <BrowserRouter>
       <div className="layout">
         <Navigation />
        
         <Routes>
         <Route exact path='/' element={<Home />} />
         <Route exact path='/eventDetails/:id' element={<EventPage />} />
         <Route exact path='/posts' element={<Posts />} />
        </Routes>
        <Footer />
            

          
       </div>
       </BrowserRouter>
    );
}


export default Layout
