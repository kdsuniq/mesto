const profilePopup = document.querySelector('popup_type_edit');
const cardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const profileFormElement = profilePopup.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

profilePopup.classList.add("popup_is-animated");
cardPopup.classList.add("popup_is-animated");
imagePopup.classList.add("popup_is-animated");

function openModal(popup) {      
    popup.classList.add('popup_is-opened');
}

function closeModal(popup) {      
    popup.classList.toggle('popup_is-opened');
}

const profileButton = document.querySelector(".profile__edit-button");
const closeProfilePopupButton = profilePopup.querySelector(".popup__close");

profileButton.addEventListener('click', function(){
    nameInput.value = document.querySelector(".profile__title").textContent;
    jobInput.value = document.querySelector(".profile__description").textContent;
    openModal(profilePopup);
});

closeProfilePopupButton.addEventListener('click', function(){
    closeModal(profilePopup);
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    document.querySelector(".profile__title").textContent = nameInput.value;
    document.querySelector(".profile__description").textContent = jobInput.value;
    closeModal(profilePopup);
}
profileFormElement.addEventListener('submit', handleProfileFormSubmit);