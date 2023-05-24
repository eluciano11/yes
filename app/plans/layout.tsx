"use client";

import {
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupsIcon from "@mui/icons-material/Groups";
import TaskIcon from "@mui/icons-material/Task";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ScheduleIcon from "@mui/icons-material/Schedule";
import FastForwardIcon from "@mui/icons-material/FastForward";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Link from "next/link";

interface Section {
  name: string;
  icon: ReactNode;
  path: string;
  description?: string;
}

const Sections: Section[] = [
  {
    name: "Base del negocio",
    path: "/plans/1/business-idea",
    icon: <AccountBoxIcon />,
  },
  {
    name: "Análisis de mercado",
    path: "/plans/1/market-analysis",
    icon: <GroupsIcon />,
  },
  {
    name: "Plan de mercadeo",
    path: "/plans/1/marketing-plan",
    icon: <TaskIcon />,
  },
  {
    name: "Operaciones",
    path: "/plans/1/operations",
    icon: <AssignmentIcon />,
  },
  {
    name: "Tiempo y Ventas",
    path: "/plans/1/sales",
    icon: <ScheduleIcon />,
  },
  {
    name: "Plan de Acción",
    path: "/plans/1/action-plan",
    icon: <FastForwardIcon />,
  },
  {
    name: "Ajustes",
    path: "/settings",
    icon: <SettingsIcon />,
  },
  {
    name: "Consultorías",
    path: "/consulting",
    icon: <ContactPhoneIcon />,
  },
];

export default function PlanLayout({ children }: PropsWithChildren<{}>) {
  return (
    <main>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: "302px",
          flexShrink: 0,
          height: "100%",
          "& .MuiDrawer-paper": {
            width: "302px",
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          {Sections.map((section) => (
            <ListItem key={section.name} disablePadding>
              <ListItemButton href={section.path} LinkComponent={Link}>
                <ListItemIcon>{section.icon}</ListItemIcon>
                <ListItemText primary={section.name} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton href="/help" LinkComponent={Link}>
              <ListItemIcon>
                <ContactSupportIcon />
              </ListItemIcon>
              <ListItemText primary="Ayuda" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Grid container pl={37} justifyContent="center">
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </main>
  );
}
