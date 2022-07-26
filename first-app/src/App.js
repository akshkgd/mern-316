
import './App.css';
import React, {useState} from 'react';
import FoodCard from  './components/FoodCard'
function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState('Click this button!!');
  const [btnCounter, setBtnCounter] = useState(0);
  function incrementHandler(){
    setCounter(counter +1 );
    console.log(counter)
  }
  function clickHandler(){
    setValue('The button was clicked!')
  }
  function addItem(){
    setBtnCounter(btnCounter + 1);
  }
  let user = {
    name: 'ahsish',
    email: 'ahsish@gmail.cpm'
  }
  return (
    <div className='food-containe text-center'>
     
     {/* <FoodCard title="Veg Supreme Burger" price="99" img="https://source.unsplash.com/1600x800/?burger" ratings="4.6" />
     <FoodCard title="Veg Supreme Pizza" price="299" img="https://source.unsplash.com/1600x800/?pizza" ratings="4.5" />
     <FoodCard title="Green Salad" price="199" img="https://source.unsplash.com/1600x800/?salad" ratings="4.1" /> */}

      {/* <h1 className='title'>{counter}</h1>
     <button className='btn' onClick={incrementHandler}>increment</button> */}


    <h1 className='title'>Add Food Item</h1>
     <button className='btn' onClick={addItem}>Add Food Item {btnCounter}</button>
     <button className='btn' onClick={addItem}>Add Food Item {btnCounter}</button>



     

    </div>
    
  );
}

export default App;
