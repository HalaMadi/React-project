import { Grid, Typography } from "@mui/material";
import React from "react";
import { LineBreak } from "../../../home/components/header/style";
import {
  DesignContainer,
  StyledTitle,
  StyledTypography,
  StyledDivider,
} from "./style";

const Design: React.FC = () => {
  return (
    <DesignContainer>
      <StyledTitle variant="h3">Design Process</StyledTitle>
      <Grid container spacing={3} gap={5}>
        <Grid item xs={12}>
          <StyledTypography>
            01-
            <LineBreak />
            Discovery
          </StyledTypography>
          <Typography variant="body1" sx={{ maxWidth: "50%" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates, cum harum! Quidem repellat cum error alias natus rerum
            sed autem aliquam nemo vitae unde, quaerat animi eveniet temporibus
            eum excepturi?{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Grid
            container
            spacing={3}
            sx={{ width: "50%", justifyContent: "flex-end" }}
          >
            <Grid item xs={12}>
              <StyledDivider />
              <StyledTypography>
                02-
                <LineBreak />
                Strategy
              </StyledTypography>
              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore impedit eius dignissimos. Dolore, corrupti aliquam est
                totam delectus, accusamus necessitatibus tenetur perspiciatis
                optio esse cupiditate modi fuga nostrum aut ratione?{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <StyledDivider />
          <StyledTypography>
            03-
            <LineBreak />
            Discovery
          </StyledTypography>
          <Typography variant="body1" sx={{ maxWidth: "50%" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates, cum harum! Quidem repellat cum error alias natus rerum
            sed autem aliquam nemo vitae unde, quaerat animi eveniet temporibus
            eum excepturi?{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Grid
            container
            spacing={3}
            sx={{ width: "50%", justifyContent: "flex-end" }}
          >
            <Grid item xs={12}>
              <StyledDivider />
              <StyledTypography>
                03-
                <LineBreak />
                Design
              </StyledTypography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                laudantium consectetur error sint odio, asperiores aliquam id?
                Officiis perferendis rem natus voluptatem cumque! Culpa alias
                deleniti nostrum vel libero non.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DesignContainer>
  );
};

export default Design;
