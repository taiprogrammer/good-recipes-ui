import {
  Info,
  InfoContainer,
  Title,
  Wrapper,
} from "@/app/styles/components/Card";
import Image from "next/image";
import Teste from "../../assets/no-image/cover.png";
import { ForkKnife, Heart, Timer } from "phosphor-react";

export default function Card() {
  return (
    <Wrapper>
      <div className="container">
        <Image src={Teste} width={250} height={250} alt="" />
        <Heart size={24} className="favorite-blank" />
        <InfoContainer>
          <Title>Nome da receita</Title>
          <Info>
            <p>
              <Timer size={16} />
              <span>1 min</span>
            </p>
            <p>
              <ForkKnife size={16} />
              <span>10 porções</span>
            </p>
          </Info>
        </InfoContainer>
      </div>
    </Wrapper>
  );
}
