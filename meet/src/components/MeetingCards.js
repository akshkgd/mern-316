import './cards.css'
function MeetingCards(props){
    return(
        <div className="card">
            <img src={'https://source.unsplash.com/1600x800/?' + props.img} />
            <h3>{ props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}
export default MeetingCards;