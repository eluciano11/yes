"use client";

import {
  Box,
  Button,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import Section from "@yes/components/Section";
import { useState } from "react";

const Steps = [
  {
    id: 0,
    label: "Pregunta #1",
    description:
      "Háblame de la idea: ¿Cómo surgió esta idea? ¿Cómo descubriste esta necesidad? ¿Por qué tiene este nombre o se llama así tu marca? ¿Qué personas o vivencias influyeron en la misma? ¿Cómo los superaste?",
    field: {
      id: "context",
      field: TextField,
    },
  },
  {
    id: 1,
    label: "Pregunta #2",
    description:
      "Háblame de la idea: ¿Cómo surgió esta idea? ¿Cómo descubriste esta necesidad? ¿Por qué tiene este nombre o se llama así tu marca? ¿Qué personas o vivencias influyeron en la misma? ¿Cómo los superaste?",
    field: {
      id: "context",
      field: TextField,
    },
  },
  {
    id: 2,
    label: "Pregunta #3",
    description:
      "Háblame de la idea: ¿Cómo surgió esta idea? ¿Cómo descubriste esta necesidad? ¿Por qué tiene este nombre o se llama así tu marca? ¿Qué personas o vivencias influyeron en la misma? ¿Cómo los superaste?",
    field: {
      id: "context",
      field: TextField,
    },
  },
];

export default function History() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Section
      name="Historia"
      description={
        <Typography mt={2} variant="body1">
          ¡Háblame sobre ti y sobre el inicio de la idea! La historia tuya y
          cómo surgió esta idea de negocio te ayudará a conectar tu marca con tu
          audiencia.
        </Typography>
      }
      helpUrl="https://www.youtube.com/watch?v=9bZkp7q19f0"
    >
      <Stepper orientation="vertical" activeStep={activeStep}>
        {Steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <Typography fontWeight="bold">{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body1">{step.description}</Typography>
              <step.field.field
                id={step.field.id}
                sx={{ mt: 2 }}
                multiline
                rows={4}
                fullWidth
              />
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === Steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Section>
  );
}
