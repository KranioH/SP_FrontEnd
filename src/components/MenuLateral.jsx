import React, { useEffect, useRef, useState } from "react";
import {
  BsArrowRepeat,
  BsBarChartFill,
  BsClockHistory,
  BsGearFill,
  BsGlobeAmericas,
  BsGridFill,
  BsPlusCircleDotted,
  BsPlusCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Suape from "../assets/image/logo-suape-45anos.png";
import Logo from "../assets/image/logo.svg";
// import wall from "../assets/image/wallpaper.jpg";

import "../css/MenuLateral.css";

const MenuLateral = ({ tela }) => {
  const menuLateralRef = useRef();
  const [clicado, setClicado] = useState(true);
  const [visible, setVisible] = useState("menu-lateral hidden");
  const [activeIndex, setActiveIndex] = useState(null);

  function addMarca(e) {    
    setActiveIndex(e)
  }

  function openMenu() {
    if (clicado) {
      setVisible("menu-lateral");
    } else {
      setVisible("menu-lateral hidden");
    }
    
    setClicado(!clicado);
  }

  return (
    <div className={visible} ref={menuLateralRef}>
      <div className="logo" onClick={openMenu}>
        {clicado ? (
          <img
            style={{ width: "30px", marginBottom: "30px" }}
            src={Logo}
            alt=""
          />
        ) : (
          <img
            style={{ width: "130px", marginBottom: "30px" }}
            src={Suape}
            alt=""
          />
        )}
      </div>
      <div className="navegation">
        <Link
          key={0}
          onClick={() => addMarca(0)}
          className={`nave-link ${activeIndex == 0 && 'atual'}`}
          to="dashboard"
        >
          {clicado ? (
            <BsGridFill style={{ pointerEvents: "none" }} />
          ) : (
            <p style={{ pointerEvents: "none" }}>Dashbord</p>
          )}
        </Link>
        <Link
          key={1}
          onClick={() => addMarca(1)}
          className={`nave-link ${activeIndex == 1 && 'atual'}`}
          to="setor"
        >
          {clicado ? (
            <BsBarChartFill style={{ pointerEvents: "none" }} />
          ) : (
             <p style={{ pointerEvents: "none" }}>Setor</p>
          )}
        </Link>
        <Link
          key={2}
          onClick={() => addMarca(2)}
          className={`nave-link ${activeIndex == 2 && 'atual'}`}
          to="inserir"
        >
          {clicado ? (
            <BsPlusCircleFill style={{ pointerEvents: "none" }} />
          ) : (
             <p style={{ pointerEvents: "none" }}>Inserir</p>
          )}
        </Link>
        <Link
          key={3}
          id="config"
          onClick={() => addMarca(3)}
          className={`nave-link ${activeIndex == 3 && 'atual'}`}
          to="config"
        >
          {clicado ? (
            <BsGearFill style={{ pointerEvents: "none" }} />
          ) : (
             <p style={{ pointerEvents: "none" }}>Configuração</p>
    
          )}
        </Link>
        <Link
          key={4}
          onClick={() => addMarca(4)}
          className={`nave-link ${activeIndex == 4 && 'atual'}`}
          to="ods"
        >
          {clicado ? (
            <BsGlobeAmericas style={{ pointerEvents: "none" }} />
          ) : (
             <p style={{ pointerEvents: "none" }}>ODS</p>
          )}
        </Link>
        <Link
          key={5}
          onClick={() => addMarca(5)}
          className={`nave-link ${activeIndex == 5 && 'atual'}`}
          to="users"
        >
          {clicado ? (
            <BsArrowRepeat style={{ pointerEvents: "none" }} />
          ) : (
             <span style={{ pointerEvents: "none" }}>Usuários</span>
          )}
        </Link>
      </div>
      {/* <p>{clicado ? "v1.0" : "versão alpha 1.0"}</p> */}
    </div>
  );
};

export default MenuLateral;
