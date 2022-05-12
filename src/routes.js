import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Regitrar from "./pages/Registrar";
import Usuarios from "./pages/Usuarios";

function routes(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registrar" element={<Regitrar />} />
          <Route path="/usuario" element={<Usuarios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default routes;
