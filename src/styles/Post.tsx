import { NavLink } from 'react-router-dom'
import {styled} from 'styled-components'

export const PostDiv = styled.div`
    display: flex;
    gap: 20px;
    padding: 0 80px;

    @media (max-width:760px) {
        padding: 0 20px;
    }

    @media (max-width:590px) {
        flex-direction: column;
    }

    &>div{
        flex: 1 1 0;
    }

    & img{
       width: 100%;
    }
`

export const Links = styled(NavLink)`
    text-decoration: none;
    color: black;
`

export const Img = styled.img`
    margin-bottom: 30px;
    max-height: 300px;
    width: 100%;
    object-fit: cover;
    object-position: top;
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 80px;

    @media (max-width:760px) {
        padding: 0 20px;
    }
`