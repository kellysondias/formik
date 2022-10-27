import "./App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import schema from "./schema";

function App() {
  function onSubmit(values, actions) {
    console.log("SUBMIT:", values);
  }

  /*   function validate(values) {
    //Função que retorna um objeto com o nome do campo e/ou o erro que ocorreu. Se não aconteceu erro nenhum, ela retorna um objeto vazio.

    const errors = {};

    if (!values.name) {
      errors.name = "Nome é obrigatório";
    }

    if (!values.email) {
      errors.email = "Email é obrigatório";
    }

    return errors;
  } */

  return (
    <div className="App">
      {/* Componente que traz contextos e outros valores úteis (como "values", "initialValues" e "onSubmit") e outros comps: */
      /* O schema define como a sua estrutura de dados deve ser respeitada. Se o objeto precisa de uma atributo name como string, por exemplo. Com o schema você consegue fazer uma validação muito melhor. */}
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
          name: "",
          email: "",
        }}
        render={({ values, errors, touched, isValid }) => (
          /* Comp que se conecta a API do Formik para lidar com os submits. Assim, só precisamos passar a função de submit para o comp "Formik". */
          <Form>
            <div>
              <label>Name:</label>
              {/* Comp que substitui o input e o valor "value" e evento onChange */}
              <Field name="name" type="text" />
              {/* Se errors tiver uma chave "name" (significando que o user não passou o nome ao Field), a mensagem de erro será renderizada. */
              /* O parâmetro "touched" permite a mensagem aparecer apenas quando o usuário interaje com o input */}
              {/* {errors.name && touched.name && <span>{errors.name}</span>} */}

              {/* O componente ErrorMessage é basicamente uma forma de escrever a condicional da mensagem de erro de forma mais abstraída. */}
              <ErrorMessage name="name"/>
            </div>

            <div>
              <label>Email:</label>
              <Field name="email" type="text" />
              <ErrorMessage name="email"/>
            </div>

            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
