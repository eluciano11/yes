import { Box, TextField, Typography } from "@mui/material";
import Field from "@yes/components/Field";

export default function Vision() {
  return (
    <form>
      <Field
        name="Visión"
        description={
          <Box mt={2}>
            <Typography variant="body1">
              Escribe una declaración memorable que sea precisa, inspiradora:
            </Typography>
            <Typography variant="body1" fontWeight="bold" mt={2}>
              Preguntas guía:
            </Typography>
            <ul>
              <li>¿A dónde quieres llegar?</li>
              <li>¿Qué quieres lograr?</li>
              <li>¿A qué aspiras y que sueñas alcanzar en 10 años?</li>
              <li>Debe ser realista y alcanzable, pero ambiciosa.</li>
              <li>Puedes comenzar con un verbo.</li>
            </ul>
          </Box>
        }
        helpUrl="https://www.youtube.com/watch?v=9bZkp7q19f0"
      >
        <TextField
          name="name"
          placeholder="Escribe aquí el nombre de tu marca personal o comercial. Limitar a 100 caracteres máximo."
          multiline
          fullWidth
          rows={2}
        ></TextField>
      </Field>
    </form>
  );
}
