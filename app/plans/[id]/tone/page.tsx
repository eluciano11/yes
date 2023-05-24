import { Box, Typography } from "@mui/material";
import AudioVisualHelp from "@yes/components/AudioVisualHelp";

export default function Tone() {
  return (
    <form>
      <Typography variant="h2" align="center">
        Tone & Voice
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" mt={2}>
        Dinos cómo te vas a comunicar con tu audiencia de manera consistente y
        que refleje en todo momento la personalidad de tu marca.
      </Typography>
      <Box display="flex" justifyContent="center">
        <AudioVisualHelp url="http://www.google.com" />
      </Box>
      <Typography
        variant="body1"
        fontStyle="italic"
        fontWeight="bold"
        textAlign="center"
        mt={2}
      >
        Llena los blancos según las alternativas que correspondan a tu marca.
      </Typography>
    </form>
  );
}
