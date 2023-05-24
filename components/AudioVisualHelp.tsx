import { Box, Button, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

interface AudioVisualHelpProps {
  url: string;
}

export default function AudioVisualHelp({ url }: AudioVisualHelpProps) {
  return (
    <Button variant="contained" sx={{ mt: 2 }} size="large">
      <PlayCircleIcon sx={{ fontSize: 24, verticalAlign: "middle", mr: 1 }} />
      <Typography>Oprime para escuchar más detalles</Typography>
    </Button>
  );
}
