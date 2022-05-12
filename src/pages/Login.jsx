import React from "react";

//api
import api from "../api/api";

//redirecionamento
import { useNavigate } from "react-router-dom";

//componente
import FormLogin from "../components/FormLogin";

//style
import "../style/Login.css";

function Login(props) {
  let navigate = useNavigate();

  localStorage.removeItem("token");

  const handleSubmitRegistrar = () => {
    navigate("/registrar");
  };

  const pegarInfo = async (usuario, senha) => {
    try {
      await api
        .post("/api/authaccount/login", {
          email: usuario,
          password: senha,
        })
        .then((response) => {
          if (response.data.code == 1) {
            alert("Usuário ou senha incorretos");
          } else if (response.data.code == 0) {
            localStorage.setItem("token", response.data.data.Token);
            navigate("/usuario");
          }
        });
    } catch (error) {
      alert("Ocorreu um erro durante o login de usuario");
    }
  };

  return (
    <div className="main-login">
      <div className="align-login">
        <FormLogin onClick={pegarInfo} />

        <button
          type="button"
          className="registar-login"
          onClick={handleSubmitRegistrar}
        >
          Registrar
        </button>
      </div>
    </div>
  );
}

export default Login;
