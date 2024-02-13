import { useEffect, useState } from 'react';
import * as React from 'react';
import { Nav, ButtonNav, NavContainer } from '../styles/NavbarElement';
import { NavLink } from 'react-router-dom';


export interface INavbarProps {
}

const Navbar = (props: INavbarProps) =>{
    const activeStyle = { color: 'blue', fontWeight: "bold" };
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)

    const toggleNav = () => setToggleMenu(!toggleMenu)

    useEffect(() => {
        const changeWidth = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', changeWidth)
        return () =>  window.removeEventListener('resize', changeWidth)
    }, [])

    return (
        <NavContainer>
            {(toggleMenu || screenWidth > 760) && (
                <Nav>
                <NavLink onClick={toggleNav} style={{textDecoration: "none"}} exact to="/" activeStyle={activeStyle}>Home</NavLink>
                <NavLink onClick={toggleNav} style={{textDecoration: "none"}} to="/counter" activeStyle={activeStyle}>Counter</NavLink>
                <NavLink onClick={toggleNav} style={{textDecoration: "none"}} to="/blog" activeStyle={activeStyle}>Blog</NavLink>
                <NavLink onClick={toggleNav} style={{textDecoration: "none"}} to="/auth" activeStyle={activeStyle}>Log IN</NavLink>
            </Nav>
            )}
            
            <ButtonNav onClick={toggleNav} >
                <span></span>
                <span></span>
            </ButtonNav>
        </NavContainer>
    );
}

export default Navbar
