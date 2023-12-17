import { Box, Typography, useMediaQuery } from "@mui/material"
import React, {useRef} from "react"
import { Header } from "./Header"
import { UserData } from "./UserData"
import { GitHubStats } from "./GitHubStats"
import { WorkExperience } from "./WorkExperience"
import { Projects } from "./Projects"
import { RenderBio } from "./RenderBio"

export const Homepage = () => {

    const careerRef = useRef<any>(null)
    const projectsRef = useRef<any>(null)
    const ghRef = useRef<any>(null)
    const contactRef = useRef<any>(null)
    const mobile = useMediaQuery('(max-width:900px)')
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
      
        window.scrollTo({
             top: location,
             behavior: "smooth"
        });
    }
    
    return (
        <Box sx={{paddingBottom: 10, width: '100%', overflow: 'hidden'}}>
            <Header 
                navigateBio={navigateBio} 
                navigateCareer={navigateCareer} 
                navigateProjects={navigateProjects}
                navigateGh={navigateGh}
                navigateContact={navigateContacts}
            />
            <Box sx={{ mt: 10, margin: mobile? 1 : 6, marginTop: 4, padding: mobile? 1 : 2, pt: 5}}>
                <Box>
                    <RenderBio />
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                </Box>
                <Box ref={careerRef} id="career">
                    <WorkExperience />
                </Box>
                <Box ref={projectsRef} id="projects">
                    <Projects />
                </Box>
                <Box ref={ghRef}>
                <Typography variant='h3' sx={{textAlign: 'center', m: mobile? 1 : 4}}>GitHub</Typography>
                    <GitHubStats />
                </Box>
                <Box ref={contactRef}>
                    <Typography variant='h3' sx={{textAlign: 'center', m: mobile? 1: 4}}>Contact details</Typography>
                    <UserData />
                </Box>
            </Box>
        </Box>
    )
}