import React from "react";

import "../style/Info.css";

function Info(props) {
  return (
    <>
      <tr>
        <td className="id-usuario">{props.id}</td>
        <td className="name-usuario">{props.nome}</td>
      </tr>
    </>
  );
}

export default Info;
