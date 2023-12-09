import { Box, MobileStepper, Button } from "@mui/material";
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
    
    useEffect(() => {
        setImages(img)
    }, [img])

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
            steps={maxSteps}
            position="static"
            activeStep={step}
            color="inherit"
            nextButton={
            <Button
                size="small"
                onClick={next}
                disabled={step === maxSteps - 1}
            >
                Next
            </Button>
            }
            backButton={
            <Button size="small" onClick={prev} disabled={step === 0}>
                Back
            </Button>
            }
            />            
        </Box>
    )
}