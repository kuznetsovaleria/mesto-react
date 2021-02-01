import React from 'react'
import api from '../api/api.js';
import Card from '../components/Card'

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserData()
        .then((user) => {
            setUserName(user.name);
            setUserDescription(user.about);
            setUserAvatar(user.avatar)
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
        .then((cards) => {
            setCards(cards)
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

    return (
        <main className="content">

        <section className="profile page__profile">
          <img src={userAvatar} alt={userName} className="profile__avatar" onClick ={props.onEditAvatar} />
            <div className="profile__info">
                <h1 className="profile__name">{userName}</h1>
                <button className="profile__edit-button" aria-label="Открыть" onClick={props.onEditProfile}></button>
                <p className="profile__profession">{userDescription}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
          </section>

        <section className="cards page__cards">
            {cards.map((card) => {
                return (
                    <Card
                      key={card._id}
                      card={card}
                      onCardClick={props.onCardClick}
                      />
                )
            })}
        </section>

        </main>
    )
}

export default Main;