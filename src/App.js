import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import Routes from "./routes";

import GlobalStyle from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Header />
        <Routes />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
