import NavBarInfo from "./../../components/navBar/infoBar/navBarInfo";
import {
  Container,
  Box,
  Description,
  Column,
 
  ImageRow,
} from "./styled";
import bruxo from "./../../assets/bruxo.png";
import espadachin from "./../../assets/espadachim.png";
import sacerdote from "./../../assets/sacerdote.png";
import ladrao from "./../../assets/ladrao.png";

const Info = () => {
  return (
    <Container>
      <NavBarInfo />
      <Box>
        <h1>A plataforma de RPG de mesa da próxima geração</h1>
        <Description>
          <ImageRow>
            <img
              src={bruxo}
              alt="Bruxo"
              style={{ width: "120px", height: "auto" }}
            />
            <Column>
              <h3>Acompanhe, descubra e participe de comunidades de RPG</h3>
              <p>
                Explore comunidades vibrantes, descubra aventuras incríveis e
                junte-se a narradores talentosos na nossa rede social de RPG.
              </p>
            </Column>
          </ImageRow>
          <ImageRow>
            <img
              src={espadachin}
              alt="espadachin"
              style={{ width: "120px", height: "auto" }}
            />
            <Column>
              <h3>Crie Mesas de Rpg e acompanhe seu progresso</h3>
              <p>
                Seja o mestre da narrativa! Crie mesas de RPG personalizadas,
                guie seus amigos em aventuras épicas e acompanhe o progresso da
                sua campanha.
              </p>
            </Column>
          </ImageRow>
          <ImageRow>
            <img
              src={sacerdote}
              alt="sacerdote"
              style={{ width: "120px", height: "auto" }}
            />
            <Column>
              <h3>Descubra mesas para poder jogar</h3>
              <p>
                Encontre mesas de RPG emocionantes prontas para a sua próxima
                aventura. Explore uma variedade de cenários e histórias
                cativantes, prontos para mergulhar em ação.
              </p>
            </Column>
          </ImageRow>
          <ImageRow>
            <img
              src={ladrao}
              alt="ladrao"
              style={{ width: "120px", height: "auto" }}
            />
            <Column>
              <h3>Conheça novas pessoas</h3>
              <p>
                Amplie seu círculo de amigos e colegas aventureiros. Conheça
                jogadores de RPG apaixonados que compartilham sua paixão pelo
                universo do role-playing game em nossa comunidade acolhedora.
              </p>
            </Column>
          </ImageRow>
        </Description>
      </Box>
    </Container>
  );
};
export default Info;
