"use client";

import { Box, Typography } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";
import AudioVisualHelp from "./AudioVisualHelp";

interface FieldProps {
  name: string;
  description: ReactNode;
  helpUrl?: string;
}

export default function Section({
  name,
  description,
  helpUrl,
  children,
}: PropsWithChildren<FieldProps>) {
  return (
    <Box my={5}>
      <Typography variant="h4" textTransform="uppercase">
        {name}
      </Typography>
      {description}
      {helpUrl && <AudioVisualHelp url={helpUrl} />}
      <Box mt={2}>{children}</Box>
    </Box>
  );
}
