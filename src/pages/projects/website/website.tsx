/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LineBreak } from '../../home/components/header/style';
import { BoxImg } from '../Tansto/style';
import { StyledContainer, StyledTypography } from '../style';
import pic from '../../../public/pic2-2.png';
import pic1 from '../../../public/pic1.png';
import pic2 from '../../../public/pic2.png';
import figmaLogo from '../../../public/figma.png';
import NotionLogo from '../../../public/Notion-logo.svg.png';
import SalckLogo from '../../../public/Slack_icon_2019.svg.png';
import LinearLogo from '../../../public/images.png';
import {
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
  useTheme
} from '@mui/material';
import { TestimonialsBox } from '../../home/style';
import AddIcon from '@mui/icons-material/Add';
import {
  AccordionTitle,
  StyledAccordion,
  StyledGrid,
  StyledLogo,
  ToolsGrid
} from './style';
import { StyledButton, StyledImg } from '../../home/components/projects/style';
import { useNavigate } from 'react-router-dom';
const website: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleMoreButtonClick = () => {
    // Navigate to the '/projects' route when the More button is clicked
    navigate('/projects');
  };
  return (
    <StyledContainer>
      <StyledTypography variant="h3">
        Tasto impact -- <LineBreak />a unified visual brand for a well being
        retreat
      </StyledTypography>
      <Typography sx={{ fontSize: '20px' }} marginTop={5}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, id
        tempore! Modi animi laboriosam deserunt dolore dolorum, porro quaerat
        debitis illo, quisquam officiis ducimus eveniet fuga, velit
        reprehenderit saepe ipsam.
      </Typography>
      <BoxImg component="img" src={pic} />
      <Typography sx={{ fontSize: '20px' }} marginTop={5}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, id
        tempore! Modi animi laboriosam deserunt dolore dolorum, porro quaerat
        debitis illo, quisquam officiis ducimus eveniet fuga, velit
        reprehenderit saepe ipsam.
      </Typography>
      <Typography sx={{ fontSize: '20px' }} marginTop={5}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, id
        tempore! Modi animi laboriosam deserunt dolore dolorum, porro quaerat
        debitis illo, quisquam officiis ducimus eveniet fuga, velit
        reprehenderit saepe ipsam.
      </Typography>
      <Typography sx={{ fontSize: '20px' }} marginTop={5}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, id
        tempore! Modi animi laboriosam deserunt dolore dolorum, porro quaerat
        debitis illo, quisquam officiis ducimus eveniet fuga, velit
        reprehenderit saepe ipsam.
      </Typography>
      <Grid container>
        <TestimonialsBox>
          <Grid container marginTop={6}>
            <Typography sx={{ pb: '30px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              magnam.
            </Typography>
            <Grid item xs={8} md={8}>
              <Typography variant="h4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit fugiat quo ducimus, dicta nulla nobis labore beatae at!
                In velit ullam ipsa quae veritatis voluptatibus! Cum excepturi
                ipsa commodi, aspernatur voluptas quam, sequi ducimus suscipit
                quos libero repellat dolorum exercitationem nulla, distinctio
                enim cupiditate sed culpa deserunt? Quod, odio accusamus, sequi
                esse incidunt cumque natus voluptate aliquid molestias, officia
                corporis.
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              md={4}
              container
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <div>
                <StyledTypography>Chirs Ellingoton</StyledTypography>
                <Typography>Product Lead.Gatha</Typography>
              </div>
            </Grid>
          </Grid>
        </TestimonialsBox>
      </Grid>
      <Grid container marginTop={10} sx={{ marginLeft: '100px' }}>
        <Grid item xs={12} md={4} lg={4}>
          <Typography variant="h2">15+</Typography>
          <Typography>Launched Brands</Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Typography variant="h2">50M+</Typography>
          <Typography>View per month</Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Typography variant="h2">4+</Typography>
          <Typography>Brands Experts</Typography>
        </Grid>
      </Grid>
      <Grid container marginTop={30}>
        <Grid item xs={4} md={4} lg={4}>
          <Typography variant="h2" fontWeight={'bold'}>
            FAQs about Branding
          </Typography>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <StyledAccordion themeMode={theme.palette.mode}>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AccordionTitle>Is copywriting included in the services you provide?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion themeMode={theme.palette.mode}>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AccordionTitle>Is copywriting included in the services you provide?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>{' '}
          <StyledAccordion themeMode={theme.palette.mode}>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AccordionTitle>Is copywriting included in the services you provide?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>{' '}
          <StyledAccordion themeMode={theme.palette.mode}>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AccordionTitle>Is copywriting included in the services you provide?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>{' '}
          <StyledAccordion themeMode={theme.palette.mode}>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AccordionTitle>Is copywriting included in the services you provide?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion themeMode={theme.palette.mode}>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AccordionTitle>Is copywriting included in the services you provide?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>{' '}
          <StyledAccordion themeMode={theme.palette.mode}>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AccordionTitle>Is copywriting included in the services you provide?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>{' '}
          <StyledAccordion themeMode={theme.palette.mode}>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AccordionTitle>Is copywriting included in the services you provide?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        </Grid>
      </Grid>
      <ToolsGrid container spacing={3}>
        <Grid xs={12} md={12} lg={12}>
          <Typography variant="h4" gutterBottom>
            Our tools of choice
          </Typography>
        </Grid>
        <StyledGrid item xs={12} md={6} lg={3} display="flex">
          <StyledLogo component="img" src={figmaLogo} />
          <Typography margin="auto" variant="h5">
            Figma
          </Typography>
        </StyledGrid>
        <StyledGrid item xs={12} md={6} lg={3} display="flex">
          <StyledLogo component="img" src={SalckLogo} />
          <Typography margin="auto" variant="h5">
            Slack
          </Typography>
        </StyledGrid>
        <StyledGrid item xs={12} md={6} lg={3} display="flex">
          <StyledLogo component="img" src={LinearLogo} />
          <Typography margin="auto" variant="h5">
            Linear
          </Typography>
        </StyledGrid>
        <StyledGrid item xs={12} md={6} lg={3} display="flex">
          <StyledLogo component="img" src={NotionLogo} />
          <Typography margin="auto" variant="h5">
            Notion
          </Typography>
        </StyledGrid>
      </ToolsGrid>
      <Grid container >
        <Typography variant="h3">Recent Projects</Typography>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          container
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <StyledButton onClick={handleMoreButtonClick}>
            More <ArrowForwardIcon />
          </StyledButton>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <StyledImg component="img" src={pic1} />
            <StyledTypography>Crtly</StyledTypography>
            <Typography>Mobile App</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <StyledImg component="img" src={pic2} />
            <StyledTypography>Tansto</StyledTypography>
            <Typography>Web Design</Typography>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default website;
