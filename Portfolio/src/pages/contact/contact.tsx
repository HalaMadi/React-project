import { Button, Grid } from '@mui/material';
import React from 'react';
import { ContactGrid, StyledTypography, ContactBox, FullWidthTextField, StyledTextarea } from './styles';


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
              label="Full Width"
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
              label="Full Width"
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
              label="Full Width"
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
            />
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <StyledTextarea
              aria-label="Message"
              placeholder="Your message"
              minRows={4}
            />
          </ContactBox>
        </Grid>
        <Grid item >
          <ContactBox>
            <Button variant="contained" color="primary">
              Send
            </Button>
          </ContactBox>
        </Grid>
      </ContactGrid>
    </>
  );
};

export default Contact;
