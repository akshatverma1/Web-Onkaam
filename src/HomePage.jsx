import React from 'react';
import Navbarfunction from './Navbar';
import Footerfunction from './Footer';
import Bottomnavfunction from './Bottom_navigation';
import Servicesfunction from './Services';
import BreakLO from './BreakLine';
import Airfunction from './Aircon';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Errorr from './Error';
import Bnav from './Bottom_nav';

export default function homepageFunction(){
    return(
        <div>
            <Navbarfunction></Navbarfunction>
            <Servicesfunction></Servicesfunction>
            {/* <Bottomnavfunction></Bottomnavfunction> */}
            <BreakLO></BreakLO>
            <Airfunction Heading="Repair & Maintenance"></Airfunction>
            <BreakLO></BreakLO>
            <Airfunction Heading="Electrical Services"></Airfunction>
            <Bnav></Bnav>
            <Footerfunction></Footerfunction>
            
        </div>
    )
}
