import React from "react";

//api
import api from "../api/api";

//redirecionamento
import { useNavigate } from "react-router-dom";

//componente
import FormRegistrar from "../components/FormRegistrar";

//style
import "../style/Registrar.css";

function Registrar(props) {
  let navigate = useNavigate();

  localStorage.removeItem("token");

  const pegarInfo = async (usuario, senha, nome) => {
    try {
      await api
        .post("/api/authaccount/registration", {
          name: nome,
          email: usuario,
          password: senha,
        })
        .then((response) => {
          if (response.data.code == 1) {
            alert("O endereço de e-mail que você digitou já está registrado");
          } else if (response.data.code == 0) {
            alert("Usario cadastrado com sucesso");
            navigate("/");
          }
        });
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro durante o registro de usuario");
    }
  };

  return (
    <div className="main-registrar">
      <div className="align-registrar">
        <FormRegistrar onClick={pegarInfo} />
      </div>
    </div>
  );
}

export default Registrar;
