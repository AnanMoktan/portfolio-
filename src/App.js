import React from "react";
import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Container className="top_60">
      <Grid container gap={7}>
        <Grid item xs={8} sm={4.5} md={3} lg={2.5}>
          <Profile />
        </Grid>

        <Grid item xs>
          <Router>
            <Header />
            <div className="main-content container_shadow">
              <Routes>
                <Route path="/Portfolio" element={<Portfolio />} />

                <Route path="/" element={<Resume />} />
              </Routes>
            </div>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
