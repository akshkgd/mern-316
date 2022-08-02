
import './App.css';
import React, {useState} from 'react';
import FoodCard from  './components/FoodCard';
import MovieCard from './components/MovieCard';
import Modal from './components/Modal';
const movies = [
  {title: "Avengers", genre: "Action", year: "2012", img: "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers: Infinity War", genre: "Action", year: "2018", img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers: Endgame", genre: "Action", year: "2019", img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers: Age of Ultron", genre: "Action", year: "2015", img: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Captain Marvel", genre: "Action", year: "2019", img: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Captain Marvel is a 2019 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."}, 
  {title: "Thor", genre: "Action", year: "2011", img: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Thor is a 2011 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Thor: Ragnarok", genre: "Action", year: "2017", img: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Thor: Ragnarok is a 2017 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers", genre: "Action", year: "2012", img: "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers: Infinity War", genre: "Action", year: "2018", img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers: Endgame", genre: "Action", year: "2019", img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  
 ]
 
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
    <div className='food-container text-cente'>
     
     {/* <FoodCard title="Veg Supreme Burger" price="99" img="https://source.unsplash.com/1600x800/?burger" ratings="4.6" />
     <FoodCard title="Veg Supreme Pizza" price="299" img="https://source.unsplash.com/1600x800/?pizza" ratings="4.5" />
     <FoodCard title="Green Salad" price="199" img="https://source.unsplash.com/1600x800/?salad" ratings="4.1" /> */}

      {/* <h1 className='title'>{counter}</h1>
     <button className='btn' onClick={incrementHandler}>increment</button> */}


    {/* <h1 className='title'>Add Food Item</h1>
     <button className='btn' onClick={addItem}>Add Food Item {btnCounter}</button>
     <button className='btn' onClick={addItem}>Add Food Item {btnCounter}</button> */}


     {
        movies.map((movie)=>{
          return <MovieCard title={movie.title} img={movie.img} year={movie.year} genere={movie.genre} desc={movie.description}  />
        })
     }
     
     
     
    </div>
    
  );
}

export default App;
