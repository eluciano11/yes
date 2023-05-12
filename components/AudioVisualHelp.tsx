import { Box, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

interface AudioVisualHelpProps {
  url: string;
}

export default function AudioVisualHelp({ url }: AudioVisualHelpProps) {
  return (
    <Box display="flex" alignItems="center" mt={2}>
      <PlayCircleIcon sx={{ fontSize: 16, verticalAlign: "middle", mr: 1 }} />
      <Typography>Oprime para escuchar más detalles.</Typography>
    </Box>
  );
}
