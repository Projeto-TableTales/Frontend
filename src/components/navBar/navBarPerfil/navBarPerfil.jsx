import { useState } from "react";
import { Container, Button, Caixa } from "./styled";
import PublicationsTab from "../../publicationsTab/publicationsTab";
import AboutTab from "../../aboutTab/aboutTab";
import CharacterTab from "../../characterTab/characterTab";
import CampaignTab from "../../campaignTab/campaignTab";

const NavBarPerfil = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  function handleChangeTab(tabName) {
    setActiveTab(tabName);
  }
  function renderTabContent() {
    switch (activeTab) {
      case "Tab 1":
        return <PublicationsTab fase="Publicações" />;
      case "Tab 2":
        return <AboutTab fase="Sobre Você" />;
      case "Tab 3":
        return <CharacterTab fase="Personagens" />;
      case "Tab 4":
        return <CampaignTab fase="Campanhas" />;
    }
  }

  return (
    <Caixa>
      <Container>
        <Button
          className={activeTab === "Tab 1" ? "selected" : "active"}
          selected={activeTab === "Tab 1"}
          onClick={() => handleChangeTab("Tab 1")}
        >
          Publicações
        </Button>
        <Button
          className={activeTab === "Tab 2" ? "active" : " "}
          selected={activeTab === "Tab 2"}
          onClick={() => handleChangeTab("Tab 2")}
        >
          Sobre Você
        </Button>
        <Button
          className={activeTab === "Tab 3" ? "active" : " "}
          selected={activeTab === "Tab 3"}
          onClick={() => handleChangeTab("Tab 3")}
        >
          Personagens
        </Button>
        <Button
          className={activeTab === "Tab 4" ? "active" : " "}
          selected={activeTab === "Tab 4"}
          onClick={() => handleChangeTab("Tab 4")}
        >
          Campanhas
        </Button>
        <Button
          className={activeTab === "Tab 5" ? "active" : " "}
          selected={activeTab === "Tab 5"}
          onClick={() => handleChangeTab("Tab 1")}
        >
          Amigos
        </Button>
      </Container>
      <div className="tab_content">{renderTabContent()}</div>
    </Caixa>
  );
};

export default NavBarPerfil;
