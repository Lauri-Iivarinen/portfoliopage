import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography, Button, MobileStepper } from "@mui/material";

interface Header {
  navigateBio?: () => void,
  navigateCareer?: () => void,
  navigateProjects?: () => void,
  navigateGh?: () => void,
  navigateContact?: () => void,
}
interface Route {
  name: string,
  nav?: () => void
}

export const Header: React.FC<Header> = ({navigateBio, navigateCareer, navigateProjects, navigateGh, navigateContact}) => {

  const mouseOver = (e: any) => {
    e.target.style.color = '#26f500'
    //purple: #9442c1
    //green: #26f500
  }

  const mouseOff = (e: any) => {
    e.target.style.color = 'inherit'
  }

  const routes: Route[] = [
    {name: 'BIO', nav: navigateBio},
    {name: 'CAREER', nav: navigateCareer},
    {name:'PROJECTS', nav: navigateProjects},
    {name: 'GITHUB', nav: navigateGh},
    {name: 'CONTACT', nav: navigateContact}
  ]

  return (
    <Box sx={{ flexGrow: 1, display: 'block', mb: 8}}>
       
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'center' }}>
          {routes.map((route, key) => 
            <Button key={key} onClick={route.nav}
              sx={{
                mr: 5,
                ml: 5,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                fontSize: 25,
                color: 'inherit',
                background: 'inherit',
                borderStyle: 'none'
              }}
              onMouseOver={mouseOver}
              onMouseOut={mouseOff}
            >
              {route.name}
            </Button>
          )}
          
        </Toolbar>
      </AppBar>
      
    </Box>
    )
}