import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Hidden, Drawer, IconButton, useMediaQuery } from "@mui/material";
import TableRowsIcon from '@mui/icons-material/TableRows';

interface Header {
  navigateBio?: () => void,
  navigateCareer?: () => void,
  navigateProjects?: () => void,
  navigateGh?: () => void,
  navigateContact?: () => void,
}
interface Route {
  name: string,
  nav: () => void
}

export const Header: React.FC<Header> = ({navigateBio, navigateCareer, navigateProjects, navigateGh, navigateContact}) => {

  const [drawer, setDrawer] = useState<boolean>(false)
  const [routes, setRoutes] = useState<Route[]>([])
  const [navigateTo, setNavigateTo] = useState<Route>()
  const mobile = useMediaQuery('(max-width:900px)')

  const mouseOver = (e: any) => {
    e.target.style.color = '#fff'
    //purple: #9442c1
    //green: #26f500
  }

  const mouseOff = (e: any) => {
    e.target.style.color = 'inherit'
  }

  const routesStatic: Route[] = [
    {name: 'BIO', nav: navigateBio!},
    {name: 'CAREER', nav: navigateCareer!},
    {name:'PROJECTS', nav: navigateProjects!},
    {name: 'GITHUB', nav: navigateGh!},
    {name: 'CONTACT', nav: navigateContact!}
  ]

  useEffect(() => {
    setRoutes(routesStatic)
  }, [])

  useEffect(() => {
    navigateTo?.nav()
    setDrawer(false)
  }, [navigateTo])


  return (
    <Box sx={{ flexGrow: 1, display: 'block', mb: 8}}>
      <AppBar position="fixed">
        {mobile ?
          <Box>
            <Toolbar>
              <IconButton sx={{color: '#fff'}} onClick={() => setDrawer(true)}><TableRowsIcon></TableRowsIcon></IconButton>
            </Toolbar>
            <Drawer
            anchor='left'
            open={drawer}
            onClose={() => setDrawer(false)}
            >
              <Box sx={{width: 300, mt: 10}}>
              {routes.map((route, key) => 
                <Button key={key} onClick={() => setNavigateTo(route)}
                  sx={{
                    height: 50,
                    borderStyle: 'solid',
                    borderWidth: 2,
                    mr: 5,
                    ml: 5,
                    mb: 5,
                    fontWeight: 700,
                    fontSize: 25,
                    color: 'inherit',
                    background: 'inherit'
                  }}
                >
                  {route.name}
                </Button>
              )}
              </Box>
            </Drawer>
          </Box>
          :
          <Toolbar sx={{ justifyContent: 'center' }}>
            {routes.map((route, key) => 
              <Button key={key} onClick={route.nav}
                sx={{
                  mr: 5,
                  ml: 5,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                  fontSize: 25,
                  color: mobile? 'red': 'inherit',
                  background: 'inherit',
                  borderStyle: 'none'
                }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOff}
              >
                {route.name}
              </Button>
            )}
            
          </Toolbar>}

        
      </AppBar>
    </Box>
    )
}