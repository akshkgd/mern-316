import Modal from './Modal';
import Backdrop from './Backdrop';
import React, {useState} from 'react';

function MovieCard(props) {
    let [modal, setModal] = useState(false);

    function showDetailsHandler(){
        setModal(true);
    }
    function hideDetailsHandler(){
        setModal(false);
    }
    return (
        
            <div className="movie-card">
                <div className="movie-header">
                    <img className="movie-card-img" onClick={showDetailsHandler} src={props.img}></img>
                    <p className="genre" >{props.genere}  {props.year}</p>
                </div>
                <h3 className="my-5 movie-name">{props.title}</h3>
                { modal ? <Modal img={props.img} desc={props.desc} title={props.title} onClick={hideDetailsHandler} /> : null }
                {  modal ?  <Backdrop onClick={hideDetailsHandler} /> : null }
            {/* <Modal img={movies[0].img} desc={movies[0].description} title={movies[0].title} /> */}
               
            </div>




        
    )
}
export default MovieCard; 