import React, { useState } from "react";

//formik
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

//icon
import { AiFillEyeInvisible } from "react-icons/ai";

//style
import "../style/FormRegistrar.css";

function FormRegistrar(props) {
  const [mostrarsenha, setmostrarSenha] = useState("password");

  const cb = props.onClick;

  const handleSubmitCB = (values) =>
    cb(values.usuario, values.senha, values.nome);

  const validationRegistrar = yup.object().shape({
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
    nome: yup
      .string()
      .max(100, "Maximo de 100 caracteres")
      .required("Campo obrogatorio!"),
  });

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmitCB}
        validationSchema={validationRegistrar}
      >
        <Form>
          <div className="div-input-registrar">
            <Field
              className="input-registrar"
              type="text"
              placeholder="Usuário"
              name="usuario"
            />
          </div>

          <div>
            <ErrorMessage
              component="span"
              name="usuario"
              className="form-erro-usuario-registrar"
            />
          </div>

          <div className="div-input-registrar">
            <Field
              className="input-registrar"
              type={mostrarsenha ? "password" : "text"}
              placeholder="Senha"
              name="senha"
            />
            <button
              className="mostrarSenha-registrar"
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
              className="form-erro-senha-registrar"
            />
          </div>

          <div className="div-input-registrar">
            <Field
              className="input-registrar"
              type="text"
              placeholder="Nome"
              name="nome"
            />
          </div>

          <div>
            <ErrorMessage
              component="span"
              name="nome"
              className="form-erro-nome-registrar"
            />
          </div>

          <button type="submit" className="submit-registrar">
            Registrar
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default FormRegistrar;
