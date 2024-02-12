import * as React from 'react';
import { TitleH3 } from '../../styles/Title';
import { Details, Img } from '../../styles/Post';
import { Date } from '../../styles/Date';
import Comment from './Comment';

export interface IPostDetailsProps {
}

export default function PostDetails (props: IPostDetailsProps) {
  return (
    <Details>
        <TitleH3>Нow to be mpre productive?</TitleH3>
        <Date>19.01.2024</Date>
        <Img src="https://animals.pibig.info/uploads/posts/2023-10/1696244958_animals-pibig-info-p-ptitsa-sekretar-morad-instagram-10.jpg" alt="" />
        <p style={{marginBottom:150}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, culpa nostrum sit veritatis reprehenderit ullam! Inventore, vero obcaecati impedit facilis quos, veritatis, nesciunt voluptatibus tempora sequi maxime ut. Dicta, cumque.</p>

        <Comment/>
    </Details>
  );
}
