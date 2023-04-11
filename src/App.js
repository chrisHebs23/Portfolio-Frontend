import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Project from "./pages/project/Project";

const Home = React.lazy(() => import("./pages/home/Home"));
const Header = React.lazy(() => import("./pages/header/Header"));
const Portfolio = React.lazy(() => import("./pages/portfolio/Portfolio"));
const HireMe = React.lazy(() => import("./pages/hire-me/HireMe"));

const App = () => {
  return (
    <Container>
      <Suspense>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route
              index
              element={
                <Suspense>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="portfolio"
              element={
                <Suspense>
                  <Portfolio />
                </Suspense>
              }
            />
            <Route
              path="hire"
              element={
                <Suspense>
                  <HireMe />
                </Suspense>
              }
            />
            <Route
              path="project/:id"
              element={
                <Suspense>
                  <Project />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
