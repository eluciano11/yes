"use client";

import { Box, Typography } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AudioVisualHelp from "./AudioVisualHelp";

interface FieldProps {
  name: string;
  description: ReactNode;
  helpUrl?: string;
}

export default function Field({
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
      {helpUrl && <AudioVisualHelp url={helpUrl} />}
      {description}
      <Box mt={2}>{children}</Box>
    </Box>
  );
}
