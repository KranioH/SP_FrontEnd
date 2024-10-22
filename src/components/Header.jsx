import React, { useEffect, useState } from "react";
import { BsArrowBarLeft, BsPerson } from "react-icons/bs";

import "../css/Header.css";

// import chatgpt from '../assets/image/chat-gpt.png'
import chatbotg from "../assets/image/chatbot-icon-green.png";
import chatbot from "../assets/image/chatbot-icon.png";
import Suape from "../assets/image/SUAPE.png";
import Chatbot from "./ChatBot";
import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {
  const [menuChat, setMenuChat] = useState(false);
  const [activeChatbot, setActiveChatbot] = useState(false);
  const nave = useNavigate()

  // console.log(user);
  
  function sairUser() {
    nave('/login')
  }

  return (
    <div className="top">
      <div className="title-header">
        <img src={Suape} />
      </div>
      <div className="user">
        <div className="info-user">
          <p>{user.name}</p>
          <span onClick={sairUser}>sair</span>
        </div>
        <div className="foto">
          <BsPerson />
        </div>
        <button
          id="chatgpt"
          style={{border: activeChatbot && '1px solid #008000'}}
          onClick={() => {
            setMenuChat(!menuChat);
            setActiveChatbot(!activeChatbot);
          }}
        >
          {activeChatbot ? (
            <img src={chatbotg} style={{animation: activeChatbot && 'rotate .2s'}} alt="logo-chat-gpt" />
          ) : (
            <img src={chatbot} style={{border:  activeChatbot && '1px solid #008000'}} alt="logo-chat-gpt" />
          )}
        </button>
        {menuChat && <Chatbot />}
      </div>
    </div>
  );
};

export default Header;
