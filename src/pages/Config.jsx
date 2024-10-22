import React from "react";
import { useRef } from "react";

import "../css/Config.css";
import Api from "../services/api";
import { useParams } from "react-router-dom";

const Config = ({ infosUser }) => {
  // const { id } = useParams
  // console.log(id);

  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  function alterar(info) {
    const uss = document.querySelector(".area-infos");

    uss.innerHTML = `
    <input ref={nameRef} type='text'  value="${info.name}">
    <input ref={emailRef} type='email' value="${info.email}">
    <input ref={passwordRef} type='password' value="${info.password}">
    `;
  }

  async function alterarUser() {
    await Api.put("/config", {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }

  async function deleteUser(info) {
    let id = info.id;
    await Api.delete("/config", { id });
  }

  return (
    <div className="config">
      <div className="infos">
        <div className="area-infos">
          <div className="userInfo">{infosUser.name}</div>
          <div className="userInfo">{infosUser.email}</div>
        </div>
        <div className="bnt-infos">
          <button id="updateInfo" onClick={() => alterar(infosUser)}>
            Alterar
          </button>
          <button id="Salvar" onClick={alterarUser}>Salvar</button>
        </div>
      </div>
      <button id="delete-user" onClick={() => deleteUser(infosUser)}>
        Deletar conta
      </button>
    </div>
  );
};

export default Config;
