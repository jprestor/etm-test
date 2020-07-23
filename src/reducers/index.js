import updateNews from './updateNews';
import updateLogin from './updateLogin';

const reducer = (state, action) => {
  return {
    news: updateNews(state, action),
    login: updateLogin(state, action)
  }
}

export default reducer;