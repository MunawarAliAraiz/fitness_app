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
    <Box my="40px" sx={{backgroundColor:'rgba(255, 38, 37, 0.15)', borderRadius:'30%',}} >
      <Stack sx={{alignItems: 'center', px: '40px', pt: '24px'}}>
        <img src={Logo} alt="Logo" width="200px" height="40px" />
        <Typography variant="h5" my="40px" alignItems="center">Made with Fun By: <span style={{fontSize: '30px'}} >Munawar❤️😊😘</span></Typography>
        <Stack direction="row" alignItems="center" gap="80px">
            <a href='https://www.linkedin.com/in/munawaralidev' style={{textDecoration: 'none', color:'#000', textAlign:"center"}}>
              <LinkedInIcon fontSize="large" />
              <Typography variant="h5" pb="40px" mt="5px" align='center'>LinkedIn</Typography>
            </a>
            <a href='https://github.com/MunawarAliAraiz' style={{textDecoration: 'none', color:'#000', textAlign:"center"}}>
              <GitHubIcon fontSize="large" />
              <Typography variant="h5" pb="40px" mt="5px">GitHub</Typography>
            </a>
            <a href='mailto:mnrkokhar@gmail.com' style={{textDecoration: 'none', color:'#000', textAlign:"center"}}>
              <EmailIcon fontSize="large" />
              <Typography variant="h5" pb="40px" mt="5px">Gmail</Typography>
            </a>
            <a href='https://twitter.com/AraizMunawar?t=qGefNlwd7AnC7w1_EPC-Mg&s=09' style={{textDecoration: 'none', color:'#000', textAlign:"center"}}>
              <TwitterIcon fontSize="large" />
              <Typography variant="h5" pb="40px" mt="5px">Twitter</Typography>
            </a>
            <a href='https://instagram.com/munawar_araiz?igshid=YzgyMTM2MGM=' style={{textDecoration: 'none', color:'#000', textAlign:"center"}}>
              <InstagramIcon fontSize="large" />
              <Typography variant="h5" pb="40px" mt="5px">Instagram</Typography>
            </a>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer