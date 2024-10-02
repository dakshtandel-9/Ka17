import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <video autoPlay muted loop className="video-background">
                <source src="/media/heroVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Container className="hero-content">
                <Typography variant="h2" component="h1" style={{ color: '#fff' }}>
                    Join the Fitness Revolution
                </Typography>
                <Typography variant="h5" style={{ color: '#fff', marginBottom: '20px' }}>
                    Transform your body and mind with KA 17 Fitness.
                </Typography>
                <Button style={{ backgroundColor: "#ff6d01" }} variant="contained" color="primary" size="large">
                    Get Started
                </Button>
            </Container>
        </div>
    );
};

export default HeroSection;
