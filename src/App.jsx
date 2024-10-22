import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";

import Home from "./pages/Home.jsx";
import Setor from "./pages/Setor.jsx";
import Config from "./pages/Config.jsx";
import Inserir from "./pages/Inserir.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Ods from "./pages/ODS.jsx";
import List from "./pages/List.jsx";
import Cadastro from "./pages/Cadastro.jsx";


function App() {
  const [infosUser, setInfosUser] = useState([])


  return (
    <div className="container">
      {/* <MenuLateral tela={tela} /> */}
      <main>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="user/:id" element={<Home setInfosUser={setInfosUser} infosUser={infosUser} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="setor" element={<Setor />} />
            <Route path="ods" element={<Ods />} />
            <Route path="inserir" element={<Inserir />} />
            <Route path="config" element={<Config infosUser={infosUser} />} />
            <Route path="users" element={<List />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
