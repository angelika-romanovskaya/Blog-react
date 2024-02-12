import * as React from 'react';
import { TitleH3 } from '../../styles/Title';
import { Date } from '../../styles/Date';
import { Description, Links, PostDiv } from '../../styles/Post';;

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
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quia itaque nemo, corporis dignissimos necessitatibus voluptatem nesciunt ratione rem quos blanditiis. Maxime sunt temporibus libero sit voluptates repellendus. Pariatur, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus dignissimos ex dolore possimus atque veniam tempora blanditiis impedit eaque, fugit qui accusamus ipsa odio eligendi itaque magnam laudantium repellendus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ipsa minus aperiam veritatis vero magnam, laudantium consectetur necessitatibus suscipit deserunt non, sed a facere qui quisquam temporibus impedit officiis blanditiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod obcaecati earum natus minus alias nostrum accusantium a molestias repellat sequi, cumque quasi id consectetur vel, aut voluptatibus voluptatem, labore ea! lorem 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae nihil nostrum voluptates soluta enim eos iusto fugit labore, numquam corporis eaque quisquam perspiciatis! Dolor odio harum quaerat reprehenderit officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, harum minus fuga est placeat commodi quasi, cupiditate voluptatem alias accusamus at corporis doloremque sunt ullam repudiandae culpa mollitia. Nesciunt, velit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, culpa nostrum lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat officiis ducimus, esse vitae aliquam cumque repudiandae? Quia possimus dolores repellat, error nisi reprehenderit ex nulla, minus commodi illum a. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut voluptatem eveniet at fugiat soluta deleniti consequatur iste laboriosam minus autem reprehenderit, iure nam expedita optio vitae quibusdam numquam repellat! sit veritatis reprehenderit ullam! Inventore, vero obcaecati impedit facilis quos, veritatis, nesciunt voluptatibus tempora sequi maxime ut. Dicta, cumque.</Description>
        </div>
      </PostDiv>
    </Links>
  );
}
