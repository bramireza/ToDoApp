import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import Nav from "./Nav";

const theme = createTheme();

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box className="app-content">{children}</Box>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
