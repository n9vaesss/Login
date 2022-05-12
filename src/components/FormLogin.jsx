import React, { useState } from "react";

//formik
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

//icon
import { AiFillEyeInvisible } from "react-icons/ai";

//style
import "../style/FormLogin.css";

function FormLogin(props) {
  const [mostrarsenha, setmostrarSenha] = useState("password");

  const cb = props.onClick;

  const handleSubmitCB = (values) => cb(values.usuario, values.senha);

  const validationLogin = yup.object().shape({
    usuario: yup
      .string()
      .email("Formato de email invalido")
      .max(100, "Maximo de 100 caracteres")
      .required("Campo obrogatorio!"),
    senha: yup
      .string()
      .min(6, "Minimo de 6 caracteres")
      .max(100, "Maximo de 100 caracteres")
      .required("Campo obrogatorio!"),
  });

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmitCB}
        validationSchema={validationLogin}
      >
        <Form>
          <div className="div-input-login">
            <Field
              className="input-login"
              type="text"
              placeholder="Usuário"
              name="usuario"
            />
          </div>

          <div>
            <ErrorMessage
              component="span"
              name="usuario"
              className="form-erro-usuario-login"
            />
          </div>

          <div className="div-input-login">
            <Field
              className="input-login"
              type={mostrarsenha ? "password" : "text"}
              placeholder="Senha"
              name="senha"
            />
            <button
              className="mostrarSenha-login"
              type="button"
              onClick={() => setmostrarSenha(!mostrarsenha)}
            >
              <AiFillEyeInvisible />
            </button>
          </div>

          <div>
            <ErrorMessage
              component="span"
              name="senha"
              className="form-erro-senha-login"
            />
          </div>

          <button type="submit" className="submit-login">
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default FormLogin;
