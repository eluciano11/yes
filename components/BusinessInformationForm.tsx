import { TextField, Typography, Box } from "@mui/material";
import Field from "./Field";

export default function BusinessInformationForm() {
  return (
    <>
      <Typography variant="h2" align="center">
        Base del negocio
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={2}>
        La identidad y base del negocio te ayuda a orientar la percepción que
        tendrán los usuarios y clientes de tu negocio transmitiendo la
        personalidad de tu marca. Además, te sirve como guía en la toma de
        decisiones.
      </Typography>
      <form>
        <Field
          name="El nombre"
          description={
            <Typography mt={2} variant="body1">
              I love cotton candy lemon drops lemon drops dessert tart chupa
              chups jelly beans pie. Marzipan toffee donut apple pie sugar plum
              sweet tart I love chupa chups. Powder tiramisu fruitcake gummi
              bears tiramisu jelly-o cupcake jujubes. Sweet roll toffee candy
              canes apple pie fruitcake tart bear claw soufflé. Pudding brownie
              I love dessert gummies ice cream cake halvah.
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
        <Field
          name="La idea de negocio"
          description={
            <Typography mt={2} variant="body1">
              Es una representación de algo que vive en tu mente que puede ser
              real y puede tener un intercambio de beneficios. En otras
              palabras, es pensar en este producto y/o servicio que podrá ayudar
              a otros y que de intercambio obtendrás un beneficio (que
              mayormente es dinero).
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
        <Field
          name="Misión"
          description={
            <Box mt={2}>
              <Typography variant="body1">
                Escribe una oración precisa, motivadora, convincente y
                memorable:
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
    </>
  );
}
