import { Grid } from '@mui/material';
import React from 'react';
import {
  ContactGrid,
  StyledTypography,
  ContactBox,
  FullWidthTextField,
  SubmitButton
} from './styles';

const Contact: React.FC = () => {
  return (
    <>
      <ContactGrid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <StyledTypography variant="h3">
            Have a project idea? Let's discuss it together.
          </StyledTypography>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <FullWidthTextField
              fullWidth
              label="Name"
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
            />
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <FullWidthTextField
              label="EmailAddress"
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
            />
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <FullWidthTextField
              label="Mobile number"
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
            />
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <FullWidthTextField
              label="How did you hear about us"
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
            />
          </ContactBox>
        </Grid>{' '}
        <Grid item xs={12}>
          <ContactBox>
            <FullWidthTextField
              label="Tell us more about your project"
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
            />
          </ContactBox>
        </Grid>
        <Grid item>
          <ContactBox>
            <SubmitButton>Submit</SubmitButton>
          </ContactBox>
        </Grid>
      </ContactGrid>
    </>
  );
};

export default Contact;
