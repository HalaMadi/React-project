import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Person from "../../../../public/person.png";
import { StyledTitle, StyleTypography, StyledButton } from "./style";
import { LineBreak } from "../../../home/components/header/style";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Header: React.FC = () => {
  return (
    <Container>
      <Grid container alignItems="center">
        <Grid item xs={6} md={6} lg={6}>
          <StyledTitle>
            <span style={{ verticalAlign: 'middle' }}>
              Hey,
              <LineBreak />
              I'm Joey
            </span>
          </StyledTitle>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          lg={6}
          container
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Box component="img" alt="Logo" src={Person} />
          <StyledButton>
            hello@joey.co <ArrowOutwardIcon />
          </StyledButton>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: '-100px' }}>
          <StyleTypography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            illum vitae eaque. In dignissimos, eos deserunt similique ad iusto
            labore! Lorem ipsum dolor aliquam nisi consequuntur nemo nulla.
          </StyleTypography>
          <StyleTypography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            illum vitae eaque. In dignissimos, eos deserunt similique ad iusto
            labore! Lorem ipsum dolor aliquam nisi consequuntur nemo nulla.
          </StyleTypography>
          <StyleTypography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            illum vitae eaque. In dignissimos, eos deserunt similique ad iusto
            labore! Lorem ipsum dolor aliquam nisi consequuntur nemo nulla.
          </StyleTypography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;

