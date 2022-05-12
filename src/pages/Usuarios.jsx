import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../api/api";
import Info from "../components/Info";

import "../style/Usuario.css";

function Usuarios(props) {
  const [listInfo, setListInfo] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("token") == null ||
      localStorage.getItem("token") == undefined
    ) {
      navigate("/");
    }

    try {
      api
        .get("/api/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setListInfo(response.data.data);
        });
    } catch (error) {
      alert("Ocorreu um erro durante a pesquisa de usuarios");
    }
  }, [navigate]);

  return (
    <div className="main-usario">
      <table className="table-usuario">
        <thead className="cabecalho-usuario">
          <td className="idName-usuario">ID</td>
          <td className="nameName-usuario">Nome</td>
        </thead>
        <tbody className="corpo-usuario">
          {typeof listInfo !== "undefined" &&
            listInfo.map((value) => {
              return (
                <Info
                  key={value.id}
                  id={value.id}
                  listInfo={listInfo}
                  setListInfo={setListInfo}
                  nome={value.name}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;
