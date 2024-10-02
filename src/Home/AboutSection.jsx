import React from "react";
import { Container, Typography, Grid, Paper, Button } from "@mui/material";
import './AboutSection.css'; // Make sure this CSS file exists

const AboutSection = () => {
    return (
        <Container className="about-section">
            <Typography variant="h3" component="h2" align="center" gutterBottom className="about-title">
                About Us
            </Typography>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Paper elevation={6} className="about-content">
                        <Typography variant="h5" component="h3" gutterBottom>
                            Welcome to KA 17 Apple Fitness
                        </Typography>
                        <Typography variant="body1" paragraph>
                            At KA 17 Apple Fitness & Dance Studio, we believe in promoting health and wellness through innovative fitness programs and engaging dance classes. Our team of certified trainers and instructors is dedicated to helping you achieve your fitness goals in a fun and supportive environment.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Whether you're looking to lose weight, build strength, or improve your overall fitness, we have a variety of programs tailored to meet your needs.
                        </Typography>
                        <Button style={{ backgroundColor: "#ff6d01" }} variant="contained" color="primary" className="learn-more-button">
                            Learn More
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} className="image-container">
                    <img src="/media/img/2.png" alt="About KA 17" className="about-image" /> {/* Update the path */}
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutSection;
