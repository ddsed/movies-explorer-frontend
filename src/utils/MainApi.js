class MainApi {
  constructor(baseURL, token) {
    this._baseURL = baseURL;
    this._token = token;
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCurrentUser() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseURL}/users/me `, {
      headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
      }
    }).then(res => this._getJson(res));
  }

  editUserInfo(data) {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._baseURL}/users/me`, {
          method: 'PATCH',
          headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            name: data.name, 
            email: data.email }),
      }).then(res => this._getJson(res));
  }

  addNewCard(data) {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._baseURL}/movies`, {
          method: 'POST',
          headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: 'https://api.nomoreparties.co' + data.image.url,
          trailerLink: data.trailerLink,
          thumbnail: 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
          movieId: data.id,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
          }),
      }).then(res => this._getJson(res));
  }

  deleteCard(cardId) {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._baseURL}/movies/${cardId}`, {
          method: 'DELETE',
          headers: {
          authorization: `Bearer ${token}`,
          },
      }).then(res => this._getJson(res));
  }

  getCards() {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._baseURL}/movies`, {
          method: 'GET',
          headers: {
          authorization: `Bearer ${token}`,
          },
      }).then(res => this._getJson(res));
  }
}
  
  
const mainApi = new MainApi('https://api.dsed.nomoreparties.co');
  
export default mainApi;