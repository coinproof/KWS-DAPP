import { Container, Grid, ImageListItem, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../components/Page';
import './portfoliodetailpage.css';
import PortfolioSlider from './PortfolioSlider';

export default function PortfolioDetailpage() {
  const [portcatogery, setPortCatogery] = useState();
  const [porttile, setPorttile] = useState();
  const [portdescription, setPortDescription] = useState();
  const [portImage, setPortImage] = useState();
  const [portdeliver, setPortDeliver] = useState();
  const [portrequirements, setPortRequirements] = useState();
  const [portsolution, setPortSolution] = useState();
  const [portteaminvolved, setTeamInvolved] = useState();

  const { generateslug } = useParams();
  console.log('showingslug', generateslug);

  useEffect(() => {
    getPortfolioDeatils();
  }, []);

  const getPortfolioDeatils = () => {
    axios.post(`${window.URL}/api/detail`, { generateslug }).then((res) => {
      console.log('responsingPortfolioDetail', res);
      setPortCatogery(res.data.portfoliocatogery);
      setPorttile(res.data.portfoliotitle);
      setPortDescription(res.data.portfoliodetail);
      setPortImage(res.data.portfolioimage);
      setPortDeliver(res.data.portfoliodeveleron);
      setPortRequirements(res.data.portfoliorequirements);
      setPortSolution(res.data.portfoliosolutionprovider);
      setTeamInvolved(res.data.portfoliteaminvolved);
    });
  };

  return (
    <div>
      <Page title="KWS || Portfolio Detail Page">
        <Container maxWidth="xl" sx={{ marginTop: '100px' }}>
          <Typography
            sx={{
              marginBottom: '5px',
              fontWeight: '900',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '20px',
              textAlign: 'center !important',
              color: '#27ADE3',
            }}
          >
            {portcatogery}
          </Typography>
          <Typography
            variant="h3"
            sx={{ marginBottom: '15px', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}
          >
            {porttile}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className="positon-relative">
              <div className="portfolio-description">
                <p className="portdescription">{portdescription}</p>
              </div>
              <div className="project-detail">
                <h6 className="details">
                  Published On : <span className="detail">{portdeliver}</span>
                </h6>
                <h6 className="details">
                  Requirements : <span className="detail">{portrequirements}</span>
                </h6>
                <h6 className="details">
                  Solutions Provided : <span className="detail">{portsolution}</span>
                </h6>
                <h6 className="details">
                  Team Involved : <span className="detail">{portteaminvolved}</span>
                </h6>
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <div className="protfolioimage">
                <img src={portImage} alt="" className="portimage" />
              </div>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="xl" sx={{ marginTop: '150px' }}>
          <Typography variant="h4" sx={{ marginBottom: '15px', fontFamily: 'Poppins, sans-serif', textAlign: 'left' }}>
            Related Projects
          </Typography>

          <PortfolioSlider />
        </Container>
      </Page>
    </div>
  );
}
