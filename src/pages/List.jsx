import React, { useState, useEffect } from "react";
import Api from "../services/api";
import Usuarios from "../components/Usuarios";

import "../css/List.css";

const List = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const userFromApi = await Api.get("/users");
      setUsers(userFromApi.data);
    } catch (err) {
      console.error("Não foi possível conectar ao servidor", err.message);
      console.log("Não foi possível conectar ao servidor", err.message);
    }
  }

  async function deleteUsers(id) {
    await Api.delete(`/usuarios/${id}`);

    getUsers();
  }

  async function createUsers() {
    await Api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });

    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  // console.log(users);

  return (
    <div className="list">
      <h1>Lista de usuários</h1>
      <div className="area-list">
        {users.length > 0 ? (
          users.map((item) => <Usuarios key={item.id} users={item} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default List;
