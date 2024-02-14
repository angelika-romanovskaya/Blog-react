import * as React from 'react';
import {TitleH1} from '../styles/Title'
import { AvatarContainer, Headers } from '../styles/Header';
import Navbar from './Navbar';
import Avatar from '@material-ui/core/Avatar';
import { useTypeSelector } from '../hook/useTypeSelector';

export interface IHeaderProps {
}

const Header = (props: IHeaderProps) =>{
  const auth = useTypeSelector(state => state.auth)

  function stringToColor(string: string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }
  
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Headers>
      <Navbar/>
      <TitleH1>BlogX</TitleH1>
      {auth.auth ? <AvatarContainer style={{display: "flex", alignItems: "center", gap: 10}}><Avatar {...stringAvatar(auth.user.firstname + " " + auth.user.lastname)} /> <span>{auth.user.firstname + " " + auth.user.lastname}</span></AvatarContainer>  : <></>}

    </Headers>
  );
}

export default Header;
