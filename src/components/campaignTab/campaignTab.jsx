import { Container, Box, Title, BoxCampaign, Imagem } from "./styled";
import bruxo from "./../../assets/bruxo.png";
import React, { useState, useEffect } from "react";
import axios from "axios";

const CampaignTab = () => {
  const [campaignData, setCampaignData] = useState([]);
  const [campaignFollowData, setCampaignFollowData] = useState([]);


  const fetchData = async (url, dataSetter) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(url, config);
        dataSetter(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData("http://localhost:8080/campanha/buscarcampanhas", setCampaignData);
    fetchData("http://localhost:8080/campanha/buscarcampanhaseguidas", setCampaignFollowData);
  }, []);

  const renderCampaigns = (campaignList) => {
    return campaignList.map((campaign, index) => (
      <BoxCampaign key={index}>
        <Imagem src={bruxo} alt="Bruxo" />
        <h3>{campaign.nomeCampanha}</h3>
      </BoxCampaign>
    ));
  };

  return (
    <Container>
      <Box>
        <Title>
          <h2>Seguidas:</h2>
        </Title>
        {renderCampaigns(campaignFollowData)}
      </Box>
      <Box>
        <Title>
          <h2>Criadas:</h2>
        </Title>
        {renderCampaigns(campaignData)}
      </Box>
    </Container>
  );
};

export default CampaignTab;
