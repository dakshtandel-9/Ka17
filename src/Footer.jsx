import React from 'react';
import { Container, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#2E3B55', color: 'white', padding: '20px 0' }}>
            <Container>
                <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">KA 17 Apple Fitness & Dance Studio</Typography>
                        <Typography variant="body2">123 Fitness St, Wellness City, State, 12345</Typography>
                        <Typography variant="body2">Email: info@ka17fitness.com</Typography>
                        <Typography variant="body2">Phone: +1 (234) 567-8901</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">Follow Us</Typography>
                        <div>
                            <IconButton color="inherit" href="https://facebook.com" target="_blank">
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit" href="https://instagram.com" target="_blank">
                                <Instagram />
                            </IconButton>
                            <IconButton color="inherit" href="https://twitter.com" target="_blank">
                                <Twitter />
                            </IconButton>
                            <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                                <LinkedIn />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
                <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
                    © {new Date().getFullYear()} KA 17 Apple Fitness & Dance Studio. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
}

export default Footer;
