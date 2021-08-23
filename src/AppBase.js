import React, {useState} from 'react';
import './App.css';
import axios from 'axios';


function App(props) {
  const [usuario, setUsuario] = useState('');
  const [requisicao, setRequisicao] = useState('');
  function handlePesquisa()
  {
    if(usuario)
    {
      axios.get("https://api.github.com/users/"+usuario)
      .then(response => setRequisicao(generateUser(response.data)))
      .catch(error => setRequisicao(<h4>Nenhum usuário encontrado</h4>));
    }
  }

  function generateUser(data)
  {
    return <p>
        <img src={data.avatar_url} alt="" />  
        <br/>Profile Link: <a href= {data.html_url} > {data.html_url} </a>
        <br/> Name: {data.name}
      </p>;
  }

  return (
    <>
      <h1>{props.title}</h1>
      <p>{usuario}</p>
      <input placeholder="Usuário" className="usuario" onChange={e => setUsuario(e.target.value)} value={usuario}/>
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
      <h3>Encontrado: </h3>
      <div>
      {requisicao}
      </div>
      
    </>
  );
}

export default App;
