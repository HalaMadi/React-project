import React from "react";
import { StyledBox } from "./style";
import { Grid, Typography } from "@mui/material";

const expertise: React.FC = () => {
return (
    <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <StyledBox>
            <Typography variant="h5" gutterBottom>
            Branding
            </Typography>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
        </StyledBox>
        </Grid>
        <Grid item xs={12} md={6}>
        <StyledBox>
            <Typography variant="h5" gutterBottom>
            UI Design
            </Typography>
            <Typography>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            </Typography>
        </StyledBox>
        </Grid>
        <Grid item xs={12} md={6}>
        <StyledBox>
            <Typography variant="h5" gutterBottom>
            UX Design
            </Typography>
            <Typography>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            </Typography>
        </StyledBox>
        </Grid>
        <Grid item xs={12} md={6}>
        <StyledBox>
            <Typography variant="h5" gutterBottom>
            Development
            </Typography>
            <Typography>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            </Typography>
        </StyledBox>
        </Grid>
    </Grid>
    );
};

export default expertise;
