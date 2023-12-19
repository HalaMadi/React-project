import { Grid, useTheme } from '@mui/material';
import React from 'react';
import {
  ContactGrid,
  Contact__Typography,
  ContactBox,
  Contact__TextField,
  Contact__SubmitButton,
  Contact__Textarea,
  Error
} from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import useFirestoreData from '../../config/useFirestoreData';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRtl = currentLanguage === 'ar';
  const schema = yup.object().shape({
    name: yup.string().required(useTranslation().t('Name_is_required')),
    email: yup.string().email('Invalid email').required(useTranslation().t('Email_is_required')),
    mobile: yup.string().required(useTranslation().t('Mobile_number_is_required')),
    hearAbout: yup.string().required(useTranslation().t('This_field_is_required')),
    projectDetails: yup.string().required(useTranslation().t('Project_details_are_required'))
  });
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
          <Contact__Typography dir={isRtl ? 'rtl' : 'ltr'} variant="h3">
            {t("Contact__Typography")}
          </Contact__Typography>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <Contact__TextField
              placeholder={t("Name")}
              {...register('name')}
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
              themeMode={theme.palette.mode}
            />
            {errors.name && (
              <Error color="error" variant="body2">
                {errors.name.message}
              </Error>)}
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <Contact__TextField
              placeholder={t("Email_Address")}
              {...register('email')}
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
              themeMode={theme.palette.mode}
            />
            {errors.email && (
              <Error color="error" variant="body2">
                {errors.email.message}
              </Error>)}
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <Contact__TextField
              placeholder={t("Mobile_number")}
              {...register('mobile')}
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
              themeMode={theme.palette.mode}
            />
            {errors.mobile && (
              <Error color="error" variant="body2">
                {errors.mobile.message}
              </Error>)}
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <Contact__TextField
              placeholder={t("hearAbout")}
              {...register('hearAbout')}
              variant="standard"
              InputProps={{
                disableUnderline: true
              }}
              themeMode={theme.palette.mode}
            />
            {errors.hearAbout && (
              <Error color="error" variant="body2">
                {errors.hearAbout.message}
              </Error>)}
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <Contact__Textarea
              placeholder={t("projectDetails")}
              {...register('projectDetails')}
              themeMode={theme.palette.mode}
            />
            {errors.projectDetails && (
              <Error color="error" variant="body2">
                {errors.projectDetails.message}
              </Error>
            )}
          </ContactBox>
        </Grid>
        <Grid item xs={12}>
          <ContactBox>
            <Contact__SubmitButton themeMode={theme.palette.mode} type="submit">
              {t("Submit")}
            </Contact__SubmitButton>
          </ContactBox>
          <ContactBox>
            <Link to="/contact/DisplayData">
              <Contact__SubmitButton>
                See your answer
              </Contact__SubmitButton>
            </Link>
          </ContactBox>
        </Grid>
            </ContactGrid>
    </>
  );
};

export default Contact;
