import "./App.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import React from "react";
import Loading from "./components/loading";
import "./apis/index";

function App() {
  const Routes = () => useRoutes(routes);

  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </React.Suspense>
    </>
  );
}

export default App;
