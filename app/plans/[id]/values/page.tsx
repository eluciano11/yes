import { Box, Typography } from "@mui/material";
import AudioVisualHelp from "@yes/components/AudioVisualHelp";

export default function Values() {
  return (
    <form>
      <Typography variant="h2" align="center">
        Valores
      </Typography>
      <Box display="flex" justifyContent="center">
        <AudioVisualHelp url="http://www.google.com" />
      </Box>
      <Typography variant="body1" color="text.secondary" align="center" mt={2}>
        Escoge de 3 a 5 valores basado en la guía de más de 100 valores que te
        proveemos:
      </Typography>
      <div>Testing</div>
    </form>
  );
}
