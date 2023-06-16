import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1">Projects</Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="Portfolio Project"
            description="Description of project 1"
            link="https://example.com/project1"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="game"
            description="Description of project 2"
            link="https://example.com/project2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="project3"
            description="Description of project 3"
            link="https://example.com/project3"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
