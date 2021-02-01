import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onSubmit={`Сохранить`}
      >
        <input
          id="name-input"
          className="popup__input popup__input_name"
          type="text"
          name="edit-name"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          required
        />
        <span id="name-input-error" className="error" />
        <input
          id="profession-input"
          type="text"
          name="edit-profession"
          className="popup__input popup__input_profession"
          minLength="2"
          maxLength="200"
          placeholder="Занятие"
          required
        />
        <span id="profession-input-error" className="error" />
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onSubmit={`Создать`}
      >
        <input
          id="place-input"
          minLength="2"
          maxLength="30"
          type="text"
          name="place-name"
          placeholder="Название"
          className="popup__input popup__input_place"
          required
        />
        <span id="place-input-error" className="error" />
        <input
          id="link-input"
          type="url"
          name="img-link"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_link"
          required
        />
        <span id="link-input-error" className="error" />
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="change-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onSubmit={`Сохранить`}
      >
        <input
          id="link-avatar"
          type="url"
          name="avatar-link"
          placeholder="Ссылка на аватар"
          className="popup__input popup__input_link"
          required
        />
        <span id="link-avatar-error" className="error" />
      </PopupWithForm>

      <PopupWithForm
        title="Вы уверены?"
        name="delete-place"
        isOpen={false}
        onClose={closeAllPopups}
        onSubmit={`Да`}
      ></PopupWithForm>

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
