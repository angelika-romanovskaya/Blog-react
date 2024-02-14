import { useEffect, useState } from 'react';
import * as React from 'react';
import { Nav, ButtonNav, NavContainer } from '../styles/NavbarElement';
import { NavLink } from 'react-router-dom';
import { useTypeSelector } from '../hook/useTypeSelector';
import { useDispatch } from 'react-redux';
import { authUserLogOut } from '../actions/authAction';


export interface INavbarProps {
}

const Navbar = (props: INavbarProps) =>{
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
    const dispatch = useDispatch() 
    const auth = useTypeSelector(state => state.auth)
 console.log(auth)
    const toggleNav = () => setToggleMenu(!toggleMenu)

    useEffect(() => {
        const changeWidth = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', changeWidth)
        return () =>  window.removeEventListener('resize', changeWidth)
    }, [])

    const logOut = () => dispatch(authUserLogOut())

    return (
        <NavContainer>
            {(toggleMenu || screenWidth > 760) && (
                <Nav>
                    <NavLink onClick={toggleNav} style={ ({ isActive }) => ({textDecoration: "none", color: isActive ? "blue" : 'black', fontWeight : isActive ? 'bold' : 'normal'})} to="/" >Home</NavLink>
                    <NavLink onClick={toggleNav} style={ ({ isActive }) => ({textDecoration: "none", color: isActive ? "blue" : 'black', fontWeight : isActive ? 'bold' : 'normal'})} to="/counter" >Counter</NavLink>
                    <NavLink onClick={toggleNav} style={ ({ isActive }) => ({textDecoration: "none", color: isActive ? "blue" : 'black', fontWeight : isActive ? 'bold' : 'normal'})} to="/blog" >Blog</NavLink>
                    {auth.auth ?  <button style={{border: "none", backgroundColor: "transparent"}} onClick={logOut}>Log OUT</button> 
                                : <NavLink onClick={toggleNav} style={ ({ isActive }) => ({textDecoration: "none", color: isActive ? "blue" : 'black', fontWeight : isActive ? 'bold' : 'normal'})} to="/auth" >Log IN</NavLink>}
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
