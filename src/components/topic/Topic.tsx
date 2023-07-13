import { TopicContainer, TopicSection } from "@/app/styles/components/Topic";

export default function Topic() {
  return (
    <TopicSection>
      <TopicContainer>
        <a href="#"> Sobremesas </a>
        <a href="#"> Carnes </a>
        <a href="#"> Massas </a>
        <a href="#"> Saladas e molhos </a>
        <a href="#"> Vegano </a>
        <a href="#"> Todas as receitas </a>
      </TopicContainer>
    </TopicSection>
  );
}
