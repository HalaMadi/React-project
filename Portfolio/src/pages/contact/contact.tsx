import {
  Container,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
  Grid,
} from "@mui/material";
import React from "react";

const Contact: React.FC = () => {
  return (
    <Container>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h5">
            Have a project idea? Let's discuss it together.
          </Typography>
        </Grid>
        <Grid item>
          <TextField label="Name" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField label="Email" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField label="Subject" variant="outlined" />
        </Grid>
        <Grid item>
          <TextareaAutosize
            aria-label="Message"
            placeholder="Your message"
            minRows={4}
            style={{ width: "100%", padding: "8px", resize: "vertical" }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
