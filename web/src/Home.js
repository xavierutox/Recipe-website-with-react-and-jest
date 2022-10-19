import * as React from "react";
import { Paper, Container, Divider, Grid } from "@mui/material";
import CardComponent from "./CardComponent";
import {recipes} from './Mocks/recipes.js';

export default function Entrypoint() {
  return (
    <>
      <Container>
        <Paper elevation={1}>
          <h1 style={{ textAlign: "center" }}>Recetas el tio react</h1>
          <Divider />
          <Divider>Recetas</Divider>
          <Grid container spacing={2}>
            {recipes.recipes.map((recipe) => (
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <CardComponent recipe={recipe} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
