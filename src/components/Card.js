function Card(props) {

    function handleClick() {
        props.onCardClick(props.card)
    }

    return (
        <article className="card" key={props.card_id}>
        <img src={props.card.link} alt={props.card.name} className="card__photo" onClick={handleClick}/>
        <button className="card__delete" type="button"></button>
        <div className="card__group">
          <h2 className="card__place">{props.card.name}</h2>
          <div className ="card__likes">
            <button className="card__like" type="button"></button>
            <p className="card__likes-counter">{props.card.likes.length}</p>
         </div>
        </div>
        </article>
    )
}

export default Card;