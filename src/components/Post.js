import React from "react";
import './Post.css';

class Post extends React.Component {

    render() {
        return(
            <div className="DivPosts">
                <div className="Post">
                    <div id="nomeNegrito">{this.props.usuarioNome}</div>
                    <div>{this.props.usuarioMensagem}</div>
                </div>
            </div>
        )
    }
}

export default Post;