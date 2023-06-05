"use client";

import { TextField, Typography } from "@mui/material";
import Section from "@yes/components/Section";
import { FormEvent } from "react";

export default function BusinessIdea() {
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const res = await fetch("http://localhost:3000/api/plans/1", {
      method: "PATCH",
      body: JSON.stringify({ name: "Hello" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Section
      name="El nombre"
      description={
        <Typography mt={2} variant="body1">
          I love cotton candy lemon drops lemon drops dessert tart chupa chups
          jelly beans pie. Marzipan toffee donut apple pie sugar plum sweet tart
          I love chupa chups. Powder tiramisu fruitcake gummi bears tiramisu
          jelly-o cupcake jujubes. Sweet roll toffee candy canes apple pie
          fruitcake tart bear claw soufflé. Pudding brownie I love dessert
          gummies ice cream cake halvah.
        </Typography>
      }
      helpUrl="https://www.youtube.com/watch?v=9bZkp7q19f0"
    >
      <form onSubmit={onSubmit}>
        <TextField
          name="name"
          placeholder="Escribe aquí el nombre de tu marca personal o comercial. Limitar a 100 caracteres máximo."
          rows={4}
          autoFocus
          multiline
          fullWidth
        ></TextField>
        <button type="submit">Test me</button>
      </form>
    </Section>
  );
}
