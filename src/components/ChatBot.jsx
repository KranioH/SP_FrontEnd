import { BsSend, BsCaretDownFill } from "react-icons/bs";

const Chatbot = () => {

  
  return (
    <div className="area-chatgpt">
      <div className="chatbot-texto">
        <p className="eu">Lorem ipsum dolor sit amet.</p>
        <p className="ele">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, fugit.
        </p>
        <p className="ele">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, fugit.
        </p>
        <p className="eu">Lorem ipsum dolor sit amet.</p>
        <p className="ele">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, fugit.
        </p>
      </div>
      <div className="chatbot-entrada">
        <input type="text" id="chatbot-input" placeholder="Pesquisar" />
        <BsSend id="chatbot-enviar" />
      </div>
    </div>
  );
};

export default Chatbot;
