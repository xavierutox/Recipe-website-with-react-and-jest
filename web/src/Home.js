import * as React from "react";
import { Paper, Container, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

export default function Entrypoint() {
  return (
    <>
      <Container>
        <Paper elevation={1}>
          <h1 style={{ textAlign: "center" }}>Recetas el tio react</h1>
          <Divider />
          <Divider>Recetas</Divider>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <CardComponent />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardComponent />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
