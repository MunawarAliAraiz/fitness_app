import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box my="40px" sx={{backgroundColor:'rgba(255, 38, 37, 0.15)', borderRadius:'20%',}} >
      <Stack sx={{alignItems: 'center', px: '40px', pt: '24px'}}>
        <img src={Logo} alt="Logo" width="200px" height="40px" />
        <Stack sx={{my: {lg:"40px", xs:'20px'}}} alignItems="center">
          <Typography variant="h5">Made with Fun By: </Typography>
          <Typography><span style={{fontSize:'30px'}} >Munawar❤️😊😘</span></Typography>
        </Stack>
        <Stack direction="row" sx={{gap: { lg:"80px", xs: "15px"}}} alignItems="center" my="10px" pb="10px" >
            <a href='https://www.linkedin.com/in/munawaralidev' style={{textDecoration: 'none', color:'#000', textAlign:"center"}}>
              <LinkedInIcon fontSize="large" />
              <Typography sx={{ display: { lg: 'block', xs: 'none'}}} variant="h5" pb="40px" mt="5px" align='center'>LinkedIn</Typography>
            </a>
            <a href='https://github.com/MunawarAliAraiz/fitness_app' style={{textDecoration: 'none', color:'#000', textAlign:"center"}}>
              <GitHubIcon fontSize="large" />
              <Typography sx={{ display: { lg: 'block', xs: 'none'}}} variant="h5" pb="40px" mt="5px">GitHub</Typography>
            </a>
            <a href='mailto:mnrkokhar@gmail.com' style={{textDecoration: 'none', color:'#000', textAlign:"center"}}>
              <EmailIcon fontSize="large" />
              <Typography sx={{ display: { lg: 'block', xs: 'none'}}} variant="h5" pb="40px" mt="5px">Gmail</Typography>
            </a>
            <a href='https://twitter.com/AraizMunawar?t=qGefNlwd7AnC7w1_EPC-Mg&s=09' style={{textDecoration: 'none', color:'#000', textAlign:"center"}}>
              <TwitterIcon fontSize="large" />
              <Typography sx={{ display: { lg: 'block', xs: 'none'}}} variant="h5" pb="40px" mt="5px">Twitter</Typography>
            </a>
            <a href='https://instagram.com/munawar_araiz?igshid=YzgyMTM2MGM=' style={{textDecoration: 'none', color:'#000', textAlign:"center"}}>
              <InstagramIcon fontSize="large" />
              <Typography sx={{ display: { lg: 'block', xs: 'none'}}} variant="h5" pb="40px" mt="5px">Instagram</Typography>
            </a>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer