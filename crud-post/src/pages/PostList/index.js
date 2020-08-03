import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import Header from './components/Header/index';
import Post from './components/Post/index';
import ConfirmDialog from './components/Dialogs/index';
const mySwal = withReactContent(Swal);





class PostList extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       data: [{
         title: "Cavalo",
         body: "lorem impsum xablau "
       },
       {
        title: "Teste1",
        body: "lorem impsum xablau "
      },
      {
        title: "Teste2",
        body: "lorem impsum xablau "
      }]
     };
   }

   handleCreatePost(){
     let data = parseData(this.state.data);
     

      mySwal.fire({
        title: 'Criar Post',
        showCancelButton: true,

        html:
          '<label for="swal-input1"> Titulo</label><input id="swal-input1" class="swal2-input" required>' +
          '<label for="swal-input2">Corpo</label><input id="swal-input2" class="swal2-input" required>',
        focusConfirm: false,
        preConfirm: () => {
          let title = document.getElementById('swal-input1').value;
          let body = document.getElementById('swal-input2').value;

          if(title === "" || body === ""){
            ConfirmDialog('error', "Por favor, preencha todos os campos");
          } else{

            
          let post = {
            title: document.getElementById('swal-input1').value,
            body:  document.getElementById('swal-input2').value
          }
          data.push(post);
          ConfirmDialog('success', 'Post criado com sucesso!');
          this.setState({data: data})

          }

        }
      })
   }

   handleEditPost(index){
    let data = parseData(this.state.data);
    let post = data[index];
    //console.log(this.state.data[index]);

    mySwal.fire({
      title: 'Atualizar Post Post',
      showCancelButton: true,

      html:
        `<label for="swal-input1"> Titulo</label><input type="text" id="swal-input1" class="swal2-input" value="${post.title}"required>` +
        `<label for="swal-input2">Corpo</label><input type="text" id="swal-input2" class="swal2-input" value="${post.body}"required>`,
      focusConfirm: false,
      preConfirm: () => {
        let title = document.getElementById('swal-input1').value;
        let body = document.getElementById('swal-input2').value;
        if(title === "" || body === ""){
          ConfirmDialog('error', 'Nenhum campo pode estar vazio!')
        } else{
        post.title = title;
        post.body = body;

        data[index] = post;
        ConfirmDialog('success', 'Post Atualizado com sucesso!')
        this.setState({data: data})
        }
      }})

   }

   handleRemovePost(index){
    let data = this.state.data.slice();
    data.splice(index, 1);
    ConfirmDialog('success', 'Post excluido com sucesso!')
    this.setState({data: data})
  }

  render(){
    return(
      <div>
      <Header onClick={()=> this.handleCreatePost()}/>
      {this.state.data.map(post => {
        return(
          <Post 
          key={this.state.data.indexOf(post)} 
          edit={()=> this.handleEditPost(this.state.data.indexOf(post))} 
          remove={()=> this.handleRemovePost(this.state.data.indexOf(post))}
          title={post.title} 
          body={post.body}/>
        )
      })}

        
      </div>
    )
  }
}

function parseData(data){
  let parsedData = data.slice();

  return parsedData;
}

export default PostList;




