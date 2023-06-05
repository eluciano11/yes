"use client";

import {
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import Link from "next/link";

interface PlansProps {
  plans: any[];
}

export default function Plans({ plans }: PlansProps) {
  const onCreatePlan = async () => {
    const res = await fetch("http://localhost:3000/api/plans", {
      method: "POST",
      body: JSON.stringify({ name: "Hello" }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);
  };

  return (
    <Grid container mt={8}>
      <Grid xs={12} item>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h4">Plans</Typography>
          <Button variant="contained" onClick={onCreatePlan}>
            Create
          </Button>
        </Box>
      </Grid>
      <br />
      <Grid item>
        <Grid spacing={2} container mt={1}>
          {plans.map((plan) => (
            <Grid key={plan.id} xs={12} item>
              <Card>
                <Link href={`/plans/${plan.id}/business-idea`} passHref>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h4">{plan.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
