function MovieCard(props) {
    return (
        <div className="movie-card">
            <div className="movie-header">
                <img className="movie-card-img" src={props.img}></img>
                <p className="genre" >{props.genere}  {props.year}</p>
            </div>
            <h3 className="my-5 movie-name">{props.title}</h3>
            

        </div>
    )
}
export default MovieCard; 