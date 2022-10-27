import * as Yup from 'yup'

// Para instalar o Yup use "npm add yup" ou "yarn add yup"

/* O schema define como a sua estrutura de dados deve ser respeitada. 
Se o objeto precisa de uma atributo name como string, por exemplo. Com o schema você consegue fazer uma validação muito melhor. */}

export default Yup.object().shape({
    name: Yup.string().min(2).required(),
    email: Yup.string().email().required()
})
