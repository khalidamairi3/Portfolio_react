import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

const ProjectCard = ({ title, description, link }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h2">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Button variant="contained" color="primary" href={link} target="_blank" rel="noopener noreferrer">View Project</Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
