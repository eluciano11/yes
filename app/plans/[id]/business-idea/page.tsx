"use client";

import { TextField, Typography } from "@mui/material";
import Field from "@yes/components/Field";

export default function BusinessIdea() {
  return (
    <form>
      <Field
        name="El nombre"
        description={
          <Typography mt={2} variant="body1">
            I love cotton candy lemon drops lemon drops dessert tart chupa chups
            jelly beans pie. Marzipan toffee donut apple pie sugar plum sweet
            tart I love chupa chups. Powder tiramisu fruitcake gummi bears
            tiramisu jelly-o cupcake jujubes. Sweet roll toffee candy canes
            apple pie fruitcake tart bear claw soufflé. Pudding brownie I love
            dessert gummies ice cream cake halvah.
          </Typography>
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
