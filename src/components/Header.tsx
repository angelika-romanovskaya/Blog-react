import * as React from 'react';
import {TitleH1} from '../styles/Title'
import { Headers } from '../styles/Header';
import { Navbar } from './Navbar';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
  return (
    <Headers>
      <Navbar/>
      <TitleH1>BlogX</TitleH1>
    </Headers>
  );
}
