import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Drawer, IconButton, useMediaQuery } from "@mui/material";
import TableRowsIcon from '@mui/icons-material/TableRows';
import { HeaderProps } from "../util/types/HeaderProps";
import { Route } from "../util/types/Route";
import logo from '../util/img/logo192.png'

export const Header: React.FC<HeaderProps> = ({navigateBio, navigateCareer, navigateProjects, navigateGh, navigateContact}) => {

  const [drawer, setDrawer] = useState<boolean>(false)
  const [routes, setRoutes] = useState<Route[]>([])
  const [navigateTo, setNavigateTo] = useState<Route>()
  const mobile = useMediaQuery('(max-width:900px)')

  const mouseOver = (e: any) => {
    e.target.style.cssText = "color: #fff; border-bottom-color: #fff;"
  }

  const mouseOff = (e: any) => {
    e.target.style.cssText = "color: inherit; border-color: #16BAC5;"
  }

  useEffect(() => {
    const routesStatic: Route[] = [
      {name: 'BIO', nav: navigateBio!},
      {name: 'CAREER', nav: navigateCareer!},
      {name:'PROJECTS', nav: navigateProjects!},
      {name: 'GITHUB', nav: navigateGh!},
      {name: 'CONTACT', nav: navigateContact!}
    ]

    setRoutes(routesStatic)

  }, [navigateBio, navigateCareer, navigateProjects, navigateGh, navigateContact])

  //Mobile navigation
  useEffect(() => {
    setDrawer(false)
    navigateTo?.nav()
  }, [navigateTo])


  return (
    <Box sx={{ flexGrow: 1, display: 'block', mb: 8}}>
      <AppBar position="fixed">
        {mobile ?
          <Box>
            <Toolbar sx={{float: 'left', display: 'flex', justifyContent: 'flex-start'}}>
              <IconButton name="mobileHeader" sx={{ color: '#fff' }} onClick={() => setDrawer(true)}><TableRowsIcon /></IconButton>
            </Toolbar>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', float: 'right', mr: 3 }}>
                <img alt="logo" height={65} src={logo} />
            </Box>
            <Drawer
              anchor='left'
              open={drawer}
              onClose={() => setDrawer(false)}
            >
              <Box sx={{ width: 300, mt: 10 }}>
                {routes.map((route, key) =>
                  <Button key={key} onClick={() => setNavigateTo(route)}
                    name={route.name + 'Mobile'}
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
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', float: 'left', ml: 3 }}>
              <img alt="logo" height={65} src={logo} />
            </Box>
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {routes.map((route, key) =>
                <Button key={key} onClick={route.nav}
                  sx={{
                    height: '100%',
                    mr: 4,
                    ml: 4,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    fontSize: 25,
                    color: mobile ? 'red' : 'inherit',
                    background: 'inherit',
                    borderWidth: 2,
                    borderStyle: 'solid',
                    borderColor: '#16BAC5'
                  }}
                  onMouseOver={mouseOver}
                  onMouseOut={mouseOff}
                >
                  {route.name}
                </Button>
              )}
            </Toolbar>
          </Box>
        }
      </AppBar>
    </Box>
    )
}