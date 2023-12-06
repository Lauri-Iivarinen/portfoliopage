import { Box, MobileStepper, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Slide } from '@mui/material';

interface Props {
    img: string[]
}

type Direction = "right" | "left" | "up" | "down" | undefined

export const RenderProjectMedia: React.FC<Props> = ({ img }) => {
    const [step, setStep] = useState(0)
    const [images, setImages] = useState<string[]>([])
    const [direction, setDirection] = useState<Direction>('right')
    const maxSteps = img.length;
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
        <Box sx={{mt: 1}}>
            {images.map((img, index) => {
                return (
                    <Box>
                        {index === step &&
                        <Slide in={true} direction={direction} timeout={500}>
                        <Box
                            key={index}
                            component="img"
                            sx={{
                                objectFit: 'contain',
                                display: 'block',
                                maxWidth: '100%',
                                height: '200px',
                                margin: 'auto',
                            }}
                            src={img}
                        />
                        </Slide>}
                </Box>
                )
            })}
            <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={step}
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