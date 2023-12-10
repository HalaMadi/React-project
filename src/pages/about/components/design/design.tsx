import { Grid, Typography } from "@mui/material";
import React from "react";
import { LineBreak } from "../../../home/components/header/style";
import {
  DesignContainer,
  Design__Title,
  Design__Typography,
  StyledDivider,
  Design__RightGrid,
  ProcessTypography
} from "./style";

const Design: React.FC = () => {
  return (
    <DesignContainer>
      <Design__Title variant="h3">Design Process</Design__Title>
      <Grid container spacing={3} gap={5}>
        <Grid item xs={12}>
          <Design__Typography>
            01-
            <LineBreak />
            Discovery
          </Design__Typography>
          <ProcessTypography variant="body1" >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates, cum harum! Quidem repellat cum error alias natus rerum
            sed autem aliquam nemo vitae unde, quaerat animi eveniet temporibus
            eum excepturi?
          </ProcessTypography>
        </Grid>
        <Design__RightGrid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Design__RightGrid
            container
            spacing={3}
            sx={{ width: "50%" }}
          >
            <Grid item xs={12}>
              <StyledDivider />
              <Design__Typography>
                02-
                <LineBreak />
                Strategy
              </Design__Typography>
              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore impedit eius dignissimos. Dolore, corrupti aliquam est
                totam delectus, accusamus necessitatibus tenetur perspiciatis
                optio esse cupiditate modi fuga nostrum aut ratione?{" "}
              </Typography>
            </Grid>
          </Design__RightGrid>
        </Design__RightGrid>
        <Grid item xs={12}>
          <StyledDivider />
          <Design__Typography>
            03-
            <LineBreak />
            Discovery
          </Design__Typography>
          <ProcessTypography variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates, cum harum! Quidem repellat cum error alias natus rerum
            sed autem aliquam nemo vitae unde, quaerat animi eveniet temporibus
            eum excepturi?
          </ProcessTypography>
        </Grid>
        <Design__RightGrid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Design__RightGrid
            container
            spacing={3}
            sx={{ width: "50%" }}
          >
            <Grid item xs={12}>
              <StyledDivider />
              <Design__Typography>
                04-
                <LineBreak />
                Design
              </Design__Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                laudantium consectetur error sint odio, asperiores aliquam id?
                Officiis perferendis rem natus voluptatem cumque! Culpa alias
                deleniti nostrum vel libero non.
              </Typography>
            </Grid>
          </Design__RightGrid>
        </Design__RightGrid>
      </Grid>
    </DesignContainer>
  );
};

export default Design;
