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
        "Oi Kellen", usuarioMensagem: "Bom não sei se vai ver esse textinho mas hoje é um dia muito especial, e nao sei nem se devia te mandar msg pois vc deixou claro q nao quer cvs nao me respondendo, enfim sei que vc nao liga muito para aniversario mais eu sim e gostaria que soubesse que nao esqueci nem por um momento, vc nao sabe o quanto foi especial para mim vc nao sabe o quanto eu quis que tudo desse certo, o quanto me esforcei por isso eu sou assim c vc tento me afastar pq me machucou demais tudo isso, mas nao pq vc e uma pessoa ruim e sim pq eu realmente queria que desse certo, se um dia vc ler isso Feliz aniversario Kellen espero que voce tenha um dia lindo e feliz vc é uma mulher foda todos temos defeitos inclusive seu time kkkkk que abalo em 1 jogo, bom tem muita coisa que eu queria dizer mas aqui como e publico nao vou dizer apenas feliz aniversario tudo de bom de todo meu coraçao eu sempre cuidarei de vc msm que distante eu to com vc, se precisar sabe onde me encontrar fica bem Kellen e se cuida talvez vou sumir um pouco mais da sua vida fiquei sabendo que reclamou com seus irmaos q sempre me chamam pras coisas... achei q nao se importava me desculpa, de uma coisa tu pode ter certeza nunca quis te fazer algum mal fica bem e tenha uma boa noite, fui o primeiro a te desejar feliz aniversario e nem sabe kkk Amo vc S2!"
        
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