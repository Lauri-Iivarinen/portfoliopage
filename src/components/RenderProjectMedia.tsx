import { Box, MobileStepper, Button, Fade } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

interface Props {
    img: string[]
}

type Direction = "right" | "left" | "up" | "down" | undefined

export const RenderProjectMedia: React.FC<Props> = ({ img }) => {
    const [step, setStep] = useState(0)
    const [images, setImages] = useState<string[]>([])
    const [direction, setDirection] = useState<Direction>('right')
    const maxSteps = img.length;
    const containerRef = useRef<HTMLElement>(null);
    
    useEffect(() => {
        setImages(img)
    }, [img])

    const next = () => {
        setDirection('left')
        setStep((prevStep => prevStep + 1))
    }

    const prev = () => {
        setDirection('right')
        setStep((prevStep => prevStep - 1))
    }
    
    return (
        <Box sx={{mt: 1, width: '100%'}}>
            {images.map((img, index) => {
                return (
                    <Box key={index}>
                        {index === step &&
                        <Fade in={true} timeout={500}>
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
                                borderColor: 'rgb(200,200,200)'
                            }}
                            src={img}
                        />
                        </Fade>}
                </Box>
                )
            })}
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