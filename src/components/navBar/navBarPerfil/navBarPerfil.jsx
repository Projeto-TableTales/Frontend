import { useState } from "react";
import { Container, Button, Caixa } from "./styled";
import PublicationsTab from "../../publicationsTab/publicationsTab";
import AboutTab from "../../aboutTab/aboutTab";
import CharacterTab from "../../characterTab/characterTab";
import CampaignTab from "../../campaignTab/campaignTab";
import { useNavigate } from "react-router-dom";

const NavBarPerfil = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('publicacoes')
  function handleChangeTab(tabName) {
    setActiveTab(tabName)
  }
  function renderTabContent(){
    switch(activeTab){
      case 'Tab 1':
        return <PublicationsTab fase = 'Publicações'/>
      case 'Tab 2':
         return <AboutTab  fase = 'Sobre Você'/> 
       case 'Tab 3':
         return <CharacterTab fase = 'Personagens'/>
    }
  }

  return (
    <Caixa>
      <Container>
        <Button
          className={activeTab === 'publicacoes' ? 'selected' : 'active'}
          selected={activeTab === 'publicacoes'}
          onClick={() => handleChangeTab('publicacoes')} >
          Publicações
        </Button>
        <Button
          className={activeTab === 'sobre-voce' ? 'active' : ' '}
          selected={activeTab === 'sobre-voce'}
          onClick={() => handleChangeTab('sobre-voce')} >
          Sobre Você
        </Button>
        <Button
          className={activeTab === 'personagens' ? 'active' : ' '}
          selected={activeTab === 'personagens'}
          onClick={() => handleChangeTab('personagens')} >
          Personagens
        </Button>
        <Button
          className={activeTab === 'campanhas' ? 'active' : ' '}
          selected={activeTab === 'campanhas'}
          onClick={() => handleChangeTab('campanhas')} >
          Campanhas
        </Button>
        <Button
          className={activeTab === 'amigos' ? 'active' : ' '}
          selected={activeTab === 'amigos'}
          onClick={() => handleChangeTab('amigos')} >
          Amigos
        </Button>
      </Container>
      <div className='tab_content'>
        {renderTabContent()}
      </div>
    </Caixa>

  );
};

export default NavBarPerfil;
