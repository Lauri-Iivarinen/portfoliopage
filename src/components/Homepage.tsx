import { Box, Paper, Typography, MobileStepper } from "@mui/material"
import React, {useRef} from "react"
import { Header } from "./Header"
import { UserData } from "./UserData"
import image from '../util/img/me1.jpg'
import Grid from '@mui/material/Unstable_Grid2';
import { GitHubStats } from "./GitHubStats"
import { WorkExperience } from "./WorkExperience"
import { Projects } from "./Projects"
import { Button } from "@mui/base"
import { RenderBio } from "./RenderBio"

export const Homepage = () => {

    const bioRef = useRef<any>(null)
    const careerRef = useRef<any>(null)
    const projectsRef = useRef<any>(null)
    const ghRef = useRef<any>(null)
    const contactRef = useRef<any>(null)

    const headerOffset = 60;

    const navigateBio = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    
    const navigateCareer = () => {
          const pos = careerRef.current.getBoundingClientRect().top
          const location = pos + window.scrollY - headerOffset
        
          window.scrollTo({
               top: location,
               behavior: "smooth"
          });
    }

    const navigateProjects = () => {
        const pos = projectsRef.current.getBoundingClientRect().top
        const location = pos + window.scrollY - headerOffset
      
        window.scrollTo({
             top: location,
             behavior: "smooth"
        });
    }

    const navigateGh = () => {
        const pos = ghRef.current.getBoundingClientRect().top
        const location = pos + window.scrollY - headerOffset
      
        window.scrollTo({
             top: location,
             behavior: "smooth"
        });
    }

    const navigateContacts = () => {
        const pos = contactRef.current.getBoundingClientRect().top
        const location = pos + window.scrollY - headerOffset

        console.log(contactRef.current.getBoundingClientRect())
      
        window.scrollTo({
             top: location,
             behavior: "smooth"
        });
    }
    
    return (
        <Paper sx={{paddingBottom: 10}}>
            <Header 
            navigateBio={navigateBio} 
            navigateCareer={navigateCareer} 
            navigateProjects={navigateProjects}
            navigateGh={navigateGh}
            navigateContact={navigateContacts}
            />
            <Box sx={{ mt: 10,margin: 6, marginTop: 4, padding: 2, pt: 5}}>
                <Box>
                    <RenderBio></RenderBio>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                </Box>
                <Box ref={careerRef} id="career">
                    <WorkExperience></WorkExperience>
                </Box>
                <Box ref={projectsRef} id="projects">
                    <Projects></Projects>
                </Box>
                <Box ref={ghRef}>
                <Typography variant='h3' sx={{textAlign: 'center', m: 4}}>GitHub</Typography>
                    <GitHubStats></GitHubStats>
                </Box>
                <Box ref={contactRef}>
                    <Typography variant='h3' sx={{textAlign: 'center', m: 4}}>Contact details</Typography>
                    <UserData></UserData>
                </Box>
            </Box>
        </Paper>
    )
}