import React from "react";
import styled from "styled-components";
import Post from "./components/Post";
import back from "./components/back.jpg";
import styles from './App.css';

const TelaTotal = styled.div`
  display: flex;
  justify-content: center;
  width: 70vw;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: auto;
  background: #b4e0f9;
  position: fixed;
  left: 16vw;
`;

const TelaMensagens = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50px;
  width: 45vw;
  margin: 20px;
  padding: 30px;
  background-color: #34aceb;
  opacity: 80%;
  position: fixed;
  bottom: 0;
  border-radius: 6px;

 @media (max-width: 800px){
   flex-direction: column;
   width: 40%;
   align-items: center;
 }
    
  input{
    @media (max-width: 800px){
      width: 30vw;
      margin-bottom: 3px;
    }
  }
`;

class App extends React.Component {
  
  state = {
    mensagens: [{ usuarioNome: "Olá", usuarioMensagem: "Bem Vindo!" }],
    valorInputNome: "",
    valorInputMensagem: "",
  };

  onChangeNomeUsuario = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeMensagemUsuario = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  addNovaMensagem = () => {
    const novaMensagem = {
      usuarioNome: this.state.valorInputNome,
      usuarioMensagem: this.state.valorInputMensagem,
    };

    const novasMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({
      mensagens: novasMensagens,
    });
  };

  render() {
    return (
      <TelaTotal>
        <img src={back} alt="" width={300}/>
        
        {this.state.mensagens.map((mensagem) => {
          return (
            <Post
              key={mensagem.usuarioMensagem}
              usuarioNome={mensagem.usuarioNome}
              usuarioMensagem={mensagem.usuarioMensagem}
            />
          );
        })}
        <TelaMensagens>
          <input
            className="usuario"
            placeholder={"Usuário"}
            onChange={this.onChangeNomeUsuario}
            value={this.state.valorInputNome}
          />
          <input
            className="msg"
            placeholder={"Mensagem"}
            onChange={this.onChangeMensagemUsuario}
            value={this.state.valorInputMensagem}
          />
          <button onClick={this.addNovaMensagem}>Enviar</button>
        </TelaMensagens>
      </TelaTotal>
    );
  }
}

export default App;