import "../css/Login.css";
import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Background from "../assets/image/wallpaper.jpg";
import MiniLogo from "../assets/image/suape-logo.png";
// import logo from "../assets/image/so.png";
import Logo from "../assets/image/SUAPE.png";
import Api from "../services/api";
import { FaCircleNotch, FaSpinner } from "react-icons/fa";
// import nome from "../assets/image/nome.png";

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const inputEmailRef = useRef();
  const inputSenhaRef = useRef();
  // const erroRef = useRef();

  async function validarUser(event) {
    event.preventDefault();

    const email = inputEmailRef.current.value;
    const password = inputSenhaRef.current.value;
    // let error = erroRef.current.value;

    if (!email && !password) {
      console.log("Preencha os campos");
      setError("Preencha os campos")
      return;
    }

    try {
      setTimeout(2000);
      setLoading(true);

      const response = await Api.post("/login", { email, password });
      // console.log(response.data);

      if (response.data) {
        // let name = response.data.name;
        let id = response.data.id;
        console.log("Logado com sucesso");
        navigate(`/user/${id}`);
      } else {
        console.log("Usuário não encontrado");
      }
    } catch (err) {
      setError("Usuário não encontrado")
      console.log("Erro no server");
      // console.log(err.response.data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login">
      <form action="" className="sign-in">
        <div className="logo">
          <img id="logo-icon" src={Logo} alt="" />
          {/* <img id="logo-nome" src={nome} alt="" /> */}
        </div>
        <div className="area-input">
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
          // type="submit"
          disabled={loading}
          onClick={validarUser}
          value="Login"
        >
          {loading ? (
            <FaSpinner className="loading" />
          ) : "Login"}
        </button>
        <p>
          Já tem uma conta?
          <Link to="/cadastro">Cadastrar-se</Link>
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
}

export default Login;
