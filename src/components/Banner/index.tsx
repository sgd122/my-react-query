import {
  ButtonContainer,
  Container,
  CreateButton,
  ExploreButton,
} from './styles';

import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const goExplore = () => {
    navigate('/explore');
  };

  return (
    <Container>
      <h1 className="header-text-first"> 발견하고, 모으고, </h1>
      <h1 className="header-text-second"> 그리고 팔아보세요.</h1>
      <h5 className="header-subtext">해피브릿지에 대해 더 알고싶어요</h5>

      <ButtonContainer>
        <ExploreButton onClick={goExplore}>Explore</ExploreButton>
        <CreateButton>Create</CreateButton>
      </ButtonContainer>
    </Container>
  );
};

export default Hero;
