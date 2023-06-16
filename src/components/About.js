import React from 'react';
import { Typography, Container , makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    aboutContainer: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  }));

const About = () => {
    const classes = useStyles();
  return (
    <Container className={classes.aboutContainer}>
      <Typography variant="h2" component="h1">About Me</Typography>
      <Typography variant="body1">
        {/* Add your about me content here */}
      </Typography>
    </Container>
  );
};

export default About;
