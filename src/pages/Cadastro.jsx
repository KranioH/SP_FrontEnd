import React from "react";

import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Cadastro.css";

import Background from "../assets/image/wallpaper.jpg";
import MiniLogo from "../assets/image/suape-logo.png";
import Logo from "../assets/image/SUAPE.png";
import Api from "../services/api";
import { FaSpinner } from "react-icons/fa";

const Cadastro = () => {
  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputSenhaRef = useRef();

  const navi = useNavigate()

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function cadastrarUser(event) {
    event.preventDefault();

    const name = inputNameRef.current.value
    const email = inputEmailRef.current.value
    const password = inputSenhaRef.current.value

    if (!name && !email && !password) {
        setError('Preencha os campos')
        return
    }

    try {
      setLoading(true);

      await Api.post("/cadastro", {
        name: name,
        email: email,
        password: password,
      });

      setError("Cadastrado com sucesso");

      navi('/login')
    } catch (err) {
      setError("Erro ao cadastrar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="cadastro">
      <form action="" className="sign-up">
        <div className="logo">
          <img id="logo-icon" src={Logo} alt="" />
        </div>
        <div className="area-input">
          <input ref={inputNameRef} type="text" placeholder="Digite seu nome" />
          <input
            ref={inputEmailRef}
            type="email"
            placeholder="Digite seu email"
          />
          <input
            ref={inputSenhaRef}
            type="password"
            placeholder="Digite sua senha"
          />
        </div>

        <p className="message">{error}</p>

        <button
          id="bnt-submit"
          type="submit"
          disabled={loading}
          onClick={cadastrarUser}
          value="Login"
        >
          {loading ? (
            <FaSpinner style={{ pointerEvents: "none" }} className="loading" />
          ) : (
            "Cadastrar"
          )}
        </button>
        <p>
          Já tem uma conta?
          <Link to="/login">Logar</Link>
        </p>
      </form>
      <div className="sign-in-photo">
        <img id="mini-logo" src={MiniLogo} alt="" />
        <img
          id="wallpaper-suape"
          src={Background}
          alt="Imagem do porto suape"
        />
      </div>
    </div>
  );
};

export default Cadastro;
