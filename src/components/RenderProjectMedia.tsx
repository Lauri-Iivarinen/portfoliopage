import { Box, MobileStepper, Button, useMediaQuery } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-configurable-carousel";

interface Props {
    img: string[]
}

export const RenderProjectMedia: React.FC<Props> = ({ img }) => {
    const [step, setStep] = useState(0)
    const [images, setImages] = useState<any[]>([])
    const maxSteps = img.length;
    const containerRef = useRef<any>(null);
    const mobile = useMediaQuery('(max-width:900px)')
    
    useEffect(() => {
        setImages(img)
    }, [img])

    //Reset image position when switching mobile<->wide so carousel doesnt get messed up
    useEffect( () => {
        containerRef.current.jumpToIndex(0)
        setStep(0)
    }, [mobile])

    const next = () => {
        setStep((prevStep => prevStep + 1))
        containerRef.current.shiftRight()
    }

    const prev = () => {
        setStep((prevStep => prevStep - 1))
        containerRef.current.shiftLeft()
    }

    return (
        <Box sx={{ mt: 1, width: '100%' }}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Carousel
                    ref={containerRef}
                    arrows={false}
                    dotsNavigation={false}
                    dotsNavigationInside={true}
                    width={"80%"}
                    height={"300px"}
                    carouselStyle={'flat'}        
                >
                    {images.map((img, index) => {
                        return (
                            <Box
                                key={index}
                                component="img"
                                sx={{
                                    objectFit: 'contain',
                                    display: 'block',
                                    maxWidth: '80%',
                                    height: '300px',
                                    margin: 'auto',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    borderColor: 'rgb(200,200,200)',
                                }}
                                src={img}
                            />
                        )
                    })}
                </Carousel>
            </Box>
            <MobileStepper
                steps={mobile ? 0 : maxSteps}
                position="static"
                activeStep={step}
                color="inherit"
                nextButton={
                    <Button
                        size="large"
                        onClick={next}
                        disabled={mobile? false : step === maxSteps - 1}
                    >
                        Next
                    </Button>}
                backButton={
                    <Button 
                        size="large" 
                        onClick={prev} 
                        disabled={mobile? false : step === 0}>
                        Previous
                    </Button>}
            />            
        </Box>
    )
}