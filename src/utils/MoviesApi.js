
class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    } 
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => this._getJson(res));
  }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');
export default moviesApi;