import React, {Component} from 'react';
import Users from "./Users";

class App extends Component {
  state ={
    users: [
      {name:"Cavid", surname: "Dadashov", age: 23},
      {name:"Orxan", surname: "Memmedli", age: 30},
      {name:"Ulvi", surname: "Macidov", age: 26},
    ],
      posts: []
}

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
              if(!response.ok){
                  console.log(response.status)
              }else{
                  return response.json()
              }
          })
          .then(data => {
              this.setState({posts:data})
          })
          .catch(error => console.log(error))
   }

    render() {
        const {users,posts}=this.state
        return (
            <div>
              {users.map((user,index,arr)=>(
               <Users key={index} name={user.name} surname={user.surname} age={user.age}/>
              ))}
              <div>
                  <hr/>

                  {posts?.map(post=>(
                      <div key={post.id}>
                          <h2>{post.body}</h2>
                          <p>{post.title}</p>
                      </div>
                  ))}
              </div>
            </div>
        );
    }
}
export default App;