"use client";

import { VoicesResponse } from "@yes/types/responses";
import Section from "./Section";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const fieldStyle = {
  minWidth: "165px",
  mx: 2,
  mt: -3,
  mb: 5,
};

interface VoiceBuilderProps {
  brandTypes: VoicesResponse["brandTypes"];
  objectives: VoicesResponse["objectives"];
  communicationTypes: VoicesResponse["communicationTypes"];
}

export default function VoiceBuilder({
  brandTypes,
  objectives,
  communicationTypes,
}: VoiceBuilderProps) {
  return (
    <Section
      name="Voz de la marca"
      description={
        <Typography mt={2} variant="body1">
          Dinos cómo te vas a comunicar con tu audiencia de manera consistente y
          que refleje en todo momento la personalidad de tu marca.{" "}
          <Box component="span" fontWeight="bold">
            Llena los blancos según las alternativas que correspondan a tu
            marca.
          </Box>
        </Typography>
      }
      helpUrl="https://www.youtube.com/watch?v=9bZkp7q19f0"
    >
      <Box p={3}>
        <Typography variant="body1" display="inline">
          Mi marca
        </Typography>
        <FormControl variant="standard" sx={fieldStyle}>
          <InputLabel id="brandType">Tipo de marca</InputLabel>
          <Select labelId="brandType" label="Tipo de marca">
            {brandTypes.map((brandType) => (
              <MenuItem key={brandType.id} value={brandType.name as string}>
                {brandType.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="body1" display="inline">
          tiene como objectivo(s) principal(es)
        </Typography>
        <Box display="inline-flex" alignItems="flex-start">
          <FormControl variant="standard" sx={fieldStyle}>
            <InputLabel id="adjetives1">Adjetivos</InputLabel>
            <Select labelId="adjetives1" label="Adjetivos">
              {objectives.map((objective) => (
                <MenuItem key={objective.id} value={objective.name as string}>
                  {objective.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button size="small" variant="contained" sx={{ mt: -1 }}>
            <AddCircleIcon fontSize="small" sx={{ mr: "4px" }} />
            Añadir
          </Button>
        </Box>
        <Typography variant="body1" display="inline">
          .{" "}
        </Typography>
        <Typography variant="body1" display="inline">
          La personalidad que va clientes es de
        </Typography>
        <FormControl variant="standard" sx={fieldStyle}>
          <InputLabel id="relationshipType">Tipo de relación</InputLabel>
          <Select labelId="relationshipType" label="Tipo de relación">
            {communicationTypes.map((ct) => (
              <MenuItem key={ct.id} value={ct.name as string}>
                {ct.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="body1" display="inline">
          .{" "}
        </Typography>
        <Typography variant="body1" display="inline">
          La manera en que me a proyectar es
        </Typography>
        <Box display="inline-flex" alignItems="flex-start">
          <FormControl variant="standard" sx={fieldStyle}>
            <InputLabel id="adjetives1">Adjetivos</InputLabel>
            <Select labelId="adjetives1" label="Adjetivos">
              {objectives.map((objective) => (
                <MenuItem key={objective.id} value={objective.name as string}>
                  {objective.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button size="small" variant="contained" sx={{ mt: -1 }}>
            <AddCircleIcon fontSize="small" sx={{ mr: "4px" }} />
            Añadir
          </Button>
        </Box>
      </Box>
    </Section>
  );
}
