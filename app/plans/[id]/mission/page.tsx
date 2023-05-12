"use client";

import { Box, TextField, Typography } from "@mui/material";
import Field from "@yes/components/Field";

export default function Mision() {
  return (
    <form>
      <Field
        name="Misión"
        description={
          <Box mt={2}>
            <Typography variant="body1">
              Escribe una oración precisa, motivadora, convincente y memorable:
            </Typography>
            <Typography variant="body1" fontWeight="bold" mt={2}>
              Preguntas guía:
            </Typography>
            <ul>
              <li>¿Qué haces para lograr la satisfacción de tus clientes?</li>
              <li>¿Cuál es tu cliente?</li>
              <li>¿A qué se dedica tu negocio?</li>
              <li>¿Cuál es el propósito/ razón/ motivo principal?</li>
              <li>¿Por qué existe?</li>
              <li>
                Deja saber lo que te diferencia de los demás (propuesta de
                valor).
              </li>
              <li>Preguntas guía: Puedes comenzar con un verbo.</li>
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
