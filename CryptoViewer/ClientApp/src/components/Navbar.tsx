import React from "react";
import { NavLink } from "react-router-dom";
import {ReactComponent  as HomeLogo} from '../images/home.svg';
import {ReactComponent  as ConverterLogo} from '../images/calc.svg';
import { BackButton } from './buttons/BackButton';

export const Navbar = () => (
    <div className="sticky centered">
            <nav className="navbarPanel">   
             <div className="navbarPanelItem"> 
                        <BackButton/>
                    <div>
                        <NavLink className="nav-link" href="/" exact to={"/home"}>
                            <HomeLogo />
                        </NavLink> 
                    </div>

                    <div>
                        <NavLink className="nav-link" href={"/"} exact to={"/converter"}>
                            <ConverterLogo/>
                        </NavLink> 
                    </div>
                    <div>
                        <NavLink className="nav-link" href={"/"} exact to={"/about"}>
                            <small>About</small>
                        </NavLink> 
                    </div>
            </div>
        </nav>
    </div>

)