import * as React from 'react';
import { TitleH3 } from '../../styles/Title';
import { Date } from '../../styles/Date';
import { Links, PostDiv } from '../../styles/Post';;

export interface IPostProps {
}

export default function Post (props: IPostProps) {
  return (
    <Links to={"/post/" + 1}>
      <PostDiv>
        <div>
          <img src="https://animals.pibig.info/uploads/posts/2023-10/1696244958_animals-pibig-info-p-ptitsa-sekretar-morad-instagram-10.jpg" alt="" />
        </div>
        <div>
          <TitleH3>Нow to be mpre productive?</TitleH3>
          <Date>19.01.2024</Date>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, culpa nostrum sit veritatis reprehenderit ullam! Inventore, vero obcaecati impedit facilis quos, veritatis, nesciunt voluptatibus tempora sequi maxime ut. Dicta, cumque.</p>
        </div>
      </PostDiv>
    </Links>
  );
}
