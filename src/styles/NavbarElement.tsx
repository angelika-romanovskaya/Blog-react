import {styled} from 'styled-components'

export const NavContainer = styled.nav`
    position: fixed;
    top: 0%;
    left: 0;
    width: 100%;
    height: 50px;
`

export const Nav = styled.ul`
    @media (max-width: 760px){ 
        flex-direction: column;
        background-color: #f7f3f3;
        height: auto;
        padding: 20px 0;
    }
    list-style-type: none;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;
    gap:20px;
`

export const ButtonNav = styled.button`
    display: none;
    position: absolute;
    left: 30px;
    top: 35px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background: none;
    border: none;

    @media (max-width:760px) {
        display: flex;
    }
    
    &>span{
        width: 15px;
        height: 3px;
        background-color: black;
    }
`