import React, {Component} from 'react';
import Users from "./Users";

class App extends Component {
  state ={
    users: [
      {name:"Cavid", surname: "Dadashov", age: 23},
      {name:"Orxan", surname: "Memmedli", age: 30},
      {name:"Ulvi", surname: "Macidov", age: 26}
    ]
}
    render() {
        const {users}=this.state
        return (
            <div>
              {users.map((user,index,arr)=>(
               <Users key={index} name={user.name} surname={user.surname} age={user.age}/>
              ))}
            </div>
        );
    }
}
export default App;