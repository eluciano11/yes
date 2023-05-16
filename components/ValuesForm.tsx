"use client";

import {
  Checkbox,
  FormControlLabel,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import ValuesResponse from "@yes/types/responses";
import { useState } from "react";
import chunk from "lodash.chunk";
import Field from "./Field";

export default function ValuesTable({
  values,
  valueCategories,
}: ValuesResponse) {
  const [valueCategoryId, setValueCategoryId] = useState(1);

  const onSelectCategory = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValueCategoryId(newValue);
  };

  const filteredValues = values.filter((value) =>
    value.categories?.includes(valueCategoryId)
  );

  const chunkedValues = chunk(
    filteredValues,
    Math.floor(filteredValues.length / 3)
  );

  return (
    <Field
      name="Valores"
      description={
        <Typography mt={2} variant="body1">
          Escoge de 3 a 5 valores basado en la guía de más de 100 valores que te
          proveemos:
        </Typography>
      }
      helpUrl="https://www.youtube.com/watch?v=9bZkp7q19f0"
    >
      <Grid container>
        <Grid item xs={12} sm={7}>
          <form>
            <Tabs
              value={valueCategoryId}
              onChange={onSelectCategory}
              variant="scrollable"
              scrollButtons="auto"
            >
              {valueCategories.map((category) => (
                <Tab
                  key={category.id}
                  label={category.name}
                  value={category.id}
                />
              ))}
            </Tabs>
            <Grid container>
              {chunkedValues.map((chunkVal, index) => (
                <Grid key={index} xs={12} sm={4} item>
                  {chunkVal.map((value) => (
                    <FormControlLabel
                      key={value.id}
                      control={
                        <Checkbox key={value.id} name={value.name as string} />
                      }
                      label={value.name}
                      sx={{ display: "block" }}
                    />
                  ))}
                </Grid>
              ))}
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Field>
  );
}
