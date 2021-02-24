/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const nayoks =['Razzak', 'Jashim', 'Alamgir', 'Salman', 'Shakib', 'Shuvo']; 
  const products =[
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'}, 
    {name:'PDF Reader', price:'$6.99'},
    {name:'Premier El', price:'$249.99'}
];
// const productNames = products.map(product => product.name);
// console.log(productNames);
// const nayokNames = nayoks.map(nayok => nayok); 
// console.log(nayokNames); 
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>

          {
            products.map(product => <li>{product.name +" "+product.price}</li>)
          }

          {
            products.map(pd =><Product product = {pd}></Product>)
          }

        {/* <Product product={products[0]}></Product> */}

        {/* <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}

        {/* <Product product={products[1]}></Product> */}

        {/* <Person name={nayoks[3]} food='Fuska' naika='Moushumi'></Person> */}
        {/* <Person name='Jashim' naika='Shabana'></Person> */}
        {/* <Person name='Munna' job='Footballer'></Person>
        <Person name='Masum' job='Dorshok'></Person> */}
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
};

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data));
  }, [])
  
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle ={
    border: '1px solid gray',
    borderRadius: '5px', 
    backgroundColor: 'lightGray', 
    height: '250px', 
    width: '200px', 
    float:'left', 
    padding: '5px', 
    margin: '10px'
  }
  const {name, price} = props.product;
  // console.log(name, price);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  const personStyle= {
      border: '2px solid lightblue', 
      margin:'5px',
      padding:'5px',
      width: '400px'
  }
  // console.log(props);
  return (
    <div style={personStyle}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
