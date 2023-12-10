import { Grid, useTheme } from '@mui/material';
import React from 'react';
import {
  ContactGrid,
  Contact__Typography,
  ContactBox,
  Contact__TextField,
  Contact__SubmitButton,
  Contact__Textarea
} from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import useFirestoreData from '../../config/useFirestoreData';
// Validation using yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  mobile: yup.string().required('Mobile number is required'),
  hearAbout: yup.string(),
  projectDetails: yup.string().required('Project details are required')
});

const Contact: React.FC = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    try {
      await addDoc(collection(db, 'Information'), {
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        hearAbout: data.hearAbout || '',
        projectDetails: data.projectDetails
      });
      console.log('Form data saved to Firestore:', data);
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };
  const { data, isLoading, isError } = useFirestoreData();
  console.log('Loading:', isLoading);
  console.log('Error:', isError);
  console.log('Data:', data);
  return (
    <>
      <ContactGrid
        component="form"
        container
        alignItems="center"
        spacing={2}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid item xs={12} lg={12}>
          <Contact__Typography variant="h3">
            Have a project idea? Let's discuss it together.
          </Contact__Typography>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <Contact__TextField
              placeholder="Name"
              {...register('name')}
              error={!!errors?.name}
              helperText={errors.name?.message}
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
              themeMode={theme.palette.mode}
            />
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <Contact__TextField
              placeholder="Email Address"
              {...register('email')}
              error={!!errors?.email}
              helperText={errors.email?.message}
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
              themeMode={theme.palette.mode}
            />
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <Contact__TextField
              placeholder="Mobile number"
              {...register('mobile')}
              error={!!errors?.mobile}
              helperText={errors.mobile?.message}
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
              themeMode={theme.palette.mode}
            />
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <Contact__TextField
              placeholder="Tell us more about your project"
              {...register('hearAbout')}
              error={!!errors?.hearAbout}
              helperText={errors.hearAbout?.message}
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
              themeMode={theme.palette.mode}
            />
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <Contact__Textarea
              placeholder="Tell us more about your project"
              {...register('projectDetails')}
              themeMode={theme.palette.mode}
            />
            {errors.projectDetails && (
              <Contact__Typography color="error" variant="body2">
                {errors.projectDetails.message}
              </Contact__Typography>
            )}
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <Contact__SubmitButton themeMode={theme.palette.mode} type="submit">
              Submit
            </Contact__SubmitButton>
          </ContactBox>
        </Grid>
      </ContactGrid>
    </>
  );
};

export default Contact;
