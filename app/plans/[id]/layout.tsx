"use client";

import { Box, Step, StepButton, StepLabel, Stepper } from "@mui/material";
import { PropsWithChildren } from "react";
import Link from "next/link";

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
  return (
    <Box mt={3}>
      <Stepper alternativeLabel>
        {Steps.map((step) => (
          <Step key={step.label} disabled={false}>
            <StepButton href={step.path} LinkComponent={Link}>
              <StepLabel>{step.label}</StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      {children}
    </Box>
  );
}
