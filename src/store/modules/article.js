import ArticleService from '@/services/article.service';
import { FETCH_ARTICLE } from '@/store/actionTypes';
import { SET_ARTICLE } from '@/store/mutationTypes';

export const state = {
  article: {},
};

export const actions = {
  [FETCH_ARTICLE] ({ commit }, id) {
    return ArticleService.getArticle(id)
      .then(({ data }) => {
        commit(SET_ARTICLE, data.article);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

export const mutations = {
  [SET_ARTICLE] (currentState, article) {
    currentState.article = article;
  },
};

export default {
  state,
  actions,
  mutations,
};
