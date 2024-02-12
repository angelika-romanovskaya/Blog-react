import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Nav, ButtonNav, NavContainer } from '../styles/NavbarElement';
import { NavLink } from 'react-router-dom';


export interface INavbarProps {
}

export function Navbar (props: INavbarProps) {
    const activeStyle = { color: 'blue' };
    const [toggleMenu, setToggleMenu] = React.useState(false)
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

      React.useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
      }, [])

    return (
        <NavContainer>
            {(toggleMenu || screenWidth > 760) && (
                <Nav>
                <NavLink onClick={toggleNav} exact to="/" activeStyle={activeStyle}>Home</NavLink>
                <NavLink onClick={toggleNav} to="/counter" activeStyle={activeStyle}>Counter</NavLink>
                <NavLink onClick={toggleNav} to="/blog" activeStyle={activeStyle}>Blog</NavLink>
            </Nav>
            )}
            
            <ButtonNav onClick={toggleNav} >
                <span></span>
                <span></span>
            </ButtonNav>
        </NavContainer>
    );
}
