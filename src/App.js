// import { Component } from "react";
// class App extends Component{
//   render(){
//     return <h1>Hello Class Based Component</h1>;
//   }
// }


import Add from "./components/Add";
const myName='shubham';
const mul=(a,b)=> a*b;
const myclass='Div';
const numbers=[1,2,3,4,5];

const userinfo=[
  {
    name:'shubham',
    age:21
  },
  {
    name:'Yogendra',
    age:22
  }
]

function App(){
  return(
    <>
    
     <h2>{myName}</h2>
     <h3>{mul(3,4)}</h3>
     <p className={myclass}>My friends List:{['Alex','John']}</p>
     <Add/>
    
     {numbers.map((number)=>(
       <ul key={Math.random}>
        <li>{number}</li>
       </ul>
     ))}

     {userinfo.map((user)=>(
       <ul key={Math.random}>
        <li>{user.name}</li>
       </ul>
     ))}
    </>
   
  )
}
export default App;