import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import './ServicesSection.css';

const servicesData = [
    {
        title: 'Personal Training',
        description: 'One-on-one training sessions with our certified trainers.',
        image: '/media/img/1.png', // Update the path
    },
    {
        title: 'Group Classes',
        description: 'Join our energetic group classes for a fun workout experience.',
        image: '/media/img/2.png', // Update the path
    },
    {
        title: 'Nutrition Coaching',
        description: 'Get personalized nutrition plans to reach your fitness goals.',
        image: '/media/img/3.png', // Update the path
    },
    {
        title: 'Yoga Sessions',
        description: 'Enhance your flexibility and mental wellness with yoga.',
        image: '/media/img/4.png', // Update the path
    },
];

const ServicesSection = () => {
    return (
        <Container className="services-section">
            <Typography variant="h3" component="h2" align="center" gutterBottom>
                Our Services
            </Typography>
            <Grid container spacing={4}>
                {servicesData.map((service, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper elevation={3} className="service-card">
                            <img src={service.image} alt={service.title} className="service-image" />
                            <Typography variant="h5" component="h3" align="center">
                                {service.title}
                            </Typography>
                            <Typography variant="body1" align="center" style={{ margin: '10px 0' }}>
                                {service.description}
                            </Typography>
                            <Button style={{ backgroundColor: "#ff6d01" }} variant="contained" color="primary" fullWidth>
                                Learn More
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ServicesSection;
