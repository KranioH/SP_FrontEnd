import "../css/Home.css";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import MenuLateral from "../components/MenuLateral";
import Header from "../components/Header.jsx";
import Api from "../services/api.js";

const Home = ({ setInfosUser, infosUser }) => {
  const { id } = useParams();

  async function getUser() {
    try {
      const response = await Api.post(`/user/${id}`, { id });
      setInfosUser(response.data)

      // if (response.data) {
      //   // let name = response.data.name;
      //   let name = response.data.name;
      //   console.log("Logado com sucesso");
      //   // navigate(`/user/${id}`);
      // } else {
      //   console.log("Usuário não encontrado");
      // }
    } catch (err) {
      console.log("Erro no server");
      // console.log(err.response.data);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const [tela, setTela] = useState(false);

  return (
    <div className="home">
      <MenuLateral tela={tela} />
      <main>
        <Header user={infosUser} />
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
