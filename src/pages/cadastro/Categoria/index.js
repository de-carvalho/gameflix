import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: 'Categoria inicial',
    descricao: 'Descrição inicial',
    cor: '#ff0000',
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.nome}</h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);
        }}
      >
        <div>
          <label>
            Nome da categoria:
            <input
              type='text'
              value={values.nome}
              name='nome'
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
            <textarea
              type='text'
              value={values.descricao}
              name='descricao'
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type='color'
              value={values.cor}
              name='cor'
              onChange={handleChange}
            />
          </label>
        </div>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to='/'>Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
