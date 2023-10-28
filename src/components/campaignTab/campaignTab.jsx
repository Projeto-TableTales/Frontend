import { Container, Box, Title, BoxCampaign, Imagem } from "./styled";
import bruxo from "./../../assets/bruxo.png";

const CampaignTab = () => {
  return (
    <Container>
      <Box>
        <Title>
          <h2>Seguidas:</h2>
        </Title>
        <BoxCampaign>
          <Imagem src={bruxo} alt="Bruxo" />
          <h3>Ordem do caos</h3>
        </BoxCampaign>
      </Box>
      <Box>
        <Title>
          <h2>Participa:</h2>
        </Title>
        <BoxCampaign>
          <Imagem src={bruxo} alt="Bruxo" />
          <h3>Ordem do caos</h3>
        </BoxCampaign>
      </Box>
    </Container>
  );
};
export default CampaignTab;
