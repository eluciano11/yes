"use client";

import {
  Alert,
  Box,
  Button,
  Grid,
  Step,
  StepButton,
  StepLabel,
  Stepper,
} from "@mui/material";
import { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Step {
  label: string;
  path: string;
  completed: boolean;
}

const Steps: Step[] = [
  {
    label: "Idea de negocio",
    path: "/plans/1/business-idea",
    completed: false,
  },
  {
    label: "Misión",
    path: "/plans/1/mission",
    completed: false,
  },
  {
    label: "Vision",
    path: "/plans/1/vision",
    completed: false,
  },
  {
    label: "Valores",
    path: "/plans/1/values",
    completed: false,
  },
  {
    label: "Tono & Voz",
    path: "/plans/1/voice",
    completed: false,
  },
  {
    label: "Historia",
    path: "/plans/1/history",
    completed: false,
  },
];

export default function PlanLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const activeStep = Steps.findIndex((step) => step.path === pathname);

  const isFirst = activeStep <= 0;
  const isLast = activeStep + 1 === Steps.length;

  return (
    <Box mt={3}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {Steps.map((step) => (
          <Step key={step.label} disabled={false}>
            <StepButton href={step.path} LinkComponent={Link}>
              <StepLabel>{step.label}</StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>

      {children}

      <Grid container alignItems="center" justifyContent="space-between">
        <Button
          href={Steps[isFirst ? 0 : activeStep - 1].path}
          LinkComponent={Link}
          variant="contained"
          color="secondary"
          disabled={isFirst}
        >
          Ir atras
        </Button>
        <Button
          href={Steps[isLast ? activeStep : activeStep + 1].path}
          LinkComponent={Link}
          variant="contained"
          color="primary"
          disabled={isLast}
        >
          Siguiente
        </Button>
      </Grid>

      <Alert
        severity="info"
        variant="outlined"
        sx={{ position: "relative", mt: 3 }}
      >
        ¿Necesitas ayuda? Separa una sección de consultoría aquí.
        <Button sx={{ position: "absolute", top: 6, right: 16 }}>
          AGENDAR CITA
        </Button>
      </Alert>
    </Box>
  );
}
